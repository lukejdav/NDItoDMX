const PNG = require("pngjs").PNG
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

let latestFrame = null
let latestColours = null
let latestAPIRange = null
let previousAPIReceiver = null
let latestAPIReceiver = null
let latestNDISources = null
let currentReceiver = null

app.use(bodyParser.json())

app.get('/api/frame', (req, res) => {
	const buffer = PNG.sync.write(latestFrame)
	res.contentType("image/png")
	res.send(buffer)
})

app.get('/api/colours', (req, res) => {
	const buffer = latestColours
	res.send(buffer)
})

app.post('/api/range', (req, res) => {
	latestAPIRange = req.body
	res.send("okay")
})

app.post('/api/reciever', (req, res) => {
	latestAPIReceiver = req.body
	res.send("okay")
})

app.get('/api/NDISources', (req, res) => {
	const buffer = latestNDISources
	res.send(buffer)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

function getImage() {
	const fs = require("fs")

	const data = fs.readFileSync('./test_images/test.png')
	const png = PNG.sync.read(data)

	return png
}

// shows a list of avaliable streams and an index
// mainly used on initialisation for debugging
async function getNDIStreams() {
	const grandiose = require('grandiose');
	const finder = new grandiose.GrandioseFinder()

	setTimeout(() => {
		const sources = finder.getCurrentSources()
		for (let i = 0; i < sources.length; i++) {
			console.log(i + ": " + sources[i].name)
		}
	}, 1000)
}

// updates the NDI streams in the API
async function sendNDIStreams() {
	const grandiose = require('grandiose');
	const finder = new grandiose.GrandioseFinder()

	let allSources = []

	setTimeout(() => {
		const sources = finder.getCurrentSources()
		for (let i = 0; i < sources.length; i++) {
			allSources.push(sources[i].name)
		}
		if (allSources.length != 0) {
			latestNDISources = allSources
		}
	}, 1000)

}

// used to get the receiver at initilisation
// ensures receivers are present before sucessful running
async function getReceiver(input) {
	const grandiose = require('grandiose');
	const finder = new grandiose.GrandioseFinder()

	let index = 0

	await new Promise(resolve => {setTimeout(resolve, 1000)})

	const sources = finder.getCurrentSources()

	for (let i = 0; i < sources.length; i++) {
		if (sources[i].name == input) {
			index = i
			break
		}
	}

	let source = sources[index]

	const receiver = await grandiose.receive({
		source: source,
		colorFormat: grandiose.COLOR_FORMAT_RGBX_RGBA,
		bandwidth: grandiose.BANDWIDTH_HIGHEST,
		allowVideoFields: false,
		name: "main"
	},);

	// Hacky fix
	let timeout = 1000;
	await receiver.video(timeout).catch(() => null)

	return receiver
}

// update the global latest receiver
// will only update if it has successfully pulled sources
// this is necessary for stability
async function updateReceiver() {
	const grandiose = require('grandiose');
	const finder = new grandiose.GrandioseFinder()

	let index = 0

	await new Promise(resolve => {setTimeout(resolve, 1000)})

	const sources = finder.getCurrentSources()

	for (let i = 0; i < sources.length; i++) {
		if (sources[i].name == latestAPIReceiver) {
			index = i
			break
		}
	}

	let source = sources[index]

	if(typeof(source) != "undefined") {

		const receiver = await grandiose.receive({
			source: source,
			colorFormat: grandiose.COLOR_FORMAT_RGBX_RGBA,
			bandwidth: grandiose.BANDWIDTH_HIGHEST,
			allowVideoFields: false,
			name: "main"
		},);

		// Hacky fix
		let timeout = 1000;
		await receiver.video(timeout).catch(() => null)

		currentReceiver = receiver
	}
}

// get a single frame from the slected NDI stream
// seems to be the main cause of slow updates
async function getFrame(receiver) {

	let startTime = new Date().getTime()

	let timeout = 1000;

	try {
		let videoFrame = await receiver.video(timeout);
		const myFrame = ({
			width: videoFrame.xres,
			height: videoFrame.yres,
			data: videoFrame.data
		})
		latestFrame = myFrame
		return myFrame
	} catch (e) { console.error(e); }

	let endTime = new Date().getTime()
	console.log("FRAME:", endTime - startTime)
}

// takes a data frame of RGB vales, and width and height of frame
// returns the average area of the frame
function areaAverage(startX, endX, startY, endY, frame) {

	if (startX == -1) {
		startX = 0
	}
	if (endX == -1) {
		endX = frame.width - 1
	}
	if (startY == -1) {
		startY = 0
	}
	if (endY == -1) {
		endY = frame.height - 1
	}
	// console.log(startX, endX, startY, endY)
	if (startX >= frame.width || endX >= frame.width || startY >= frame.height || endY >= frame.height) {
		throw new Error("Area value overflow")
	}
	if (startX < 0 || endX < 0 || startY < 0 || endY < 0) {
		throw new Error("Area cannot be less than zero")
	}
	if (startX > endX || startY > endY) {
		throw new Error("Starts after end")
	}

	let redTotal = 0
	let greenTotal = 0
	let blueTotal = 0

	for (let y = startY; y <= endY; y++) {
		for (let x = startX; x <= endX; x++) {
			let pixelLocation = (x + y * frame.width) * 4
			redTotal += frame.data[pixelLocation + 0]
			greenTotal += frame.data[pixelLocation + 1]
			blueTotal += frame.data[pixelLocation + 2]
		}
	}

	let areaTotal = (endX - startX + 1) * (endY - startY + 1)
	redTotal = Math.round(redTotal / areaTotal)
	greenTotal = Math.round(greenTotal / areaTotal)
	blueTotal = Math.round(blueTotal / areaTotal)

	return [redTotal, greenTotal, blueTotal]
}

// let [a, b, c] = areaAverage(-1, -1, -1, -1, getImage())

// console.log(`Average is: ${a}, ${b}, ${c}`)

; (async () => {
	// Initialise
	// Doesn't always run on first attempt, remains stable after first successful run.
	getNDIStreams()
	sendNDIStreams()
	currentReceiver = await getReceiver(latestAPIReceiver)
	previousAPIReceiver = latestAPIReceiver

	while (true) {
		let startTime = new Date().getTime()
		sendNDIStreams()
		// receiver = await getReceiver(latestReceiver)

		console.log("Debug:")
		console.log("Latest Colours   : ", latestColours)
		console.log("Latest Range     : ", latestAPIRange)
		console.log("Previous Receiver: ", previousAPIReceiver)
		console.log("Latest Receiver  : ", latestAPIReceiver)
		console.log("Latest Sources   : ", latestNDISources)

		// only update receiver if it has changed
		// not working?
		// still way too slow
		if (latestAPIReceiver === previousAPIReceiver) {
			console.log("Still the same")
		} else {
			console.log("UPDATING RECEIVER!!")
			await updateReceiver()
			previousAPIReceiver = latestAPIReceiver
		}

		await getFrame(currentReceiver).then(myFrame => {
			if (myFrame) {
				if (latestAPIRange === null) {
					latestColours = areaAverage(0, myFrame.width-1, 0, myFrame.height-1, myFrame)
				} else {
					latestColours = areaAverage(latestAPIRange.x0, latestAPIRange.x1, latestAPIRange.y0, latestAPIRange.y1, myFrame)
				}
			}
		})

		let endTime = new Date().getTime()
		console.log("WHILE:", endTime - startTime)
	}
})()
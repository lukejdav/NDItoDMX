import { PNG } from "pngjs"
import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 3000

import grandiose from 'grandiose'
const finder = new grandiose.GrandioseFinder()

let debug = false
if(process.env.npm_config_debug) {
	debug = true
}

interface RectangleCoordinates {
	x0: number
	x1: number
	y0: number
	y1: number
}

interface Frame {
	width: number
	height: number
	data: Buffer
}

let latestFrame: Frame | null = null
let latestColours: number[] | null = null
let latestAPIRange: RectangleCoordinates | null = null
let previousAPIReceiver: string | null = null
let latestAPIReceiver: string | null = null
let latestNDISources: string[] = []
let currentReceiver: grandiose.Receiver | null = null
let latestArtNetIP: string = "127.0.0.1"
let latestChannel: number = 1

app.use(bodyParser.json())

app.get('/api/frame', (req, res) => {
	if (latestFrame){
		const buffer = PNG.sync.write(latestFrame as PNG) // TODO: fix this type
		res.contentType("image/png")
		res.send(buffer)
	} else {
		res.status(404).send()
	}
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
	latestAPIReceiver = req.body[0] || null
	res.send("okay")
})

app.get('/api/NDISources', (req, res) => {
	const buffer = latestNDISources
	res.send(buffer)
})

app.post('/api/ArtNetIP', (req, res) => {
	latestArtNetIP = String(req.body)
	res.send("okay")
})

app.post('/api/ArtNetChannel', (req, res) => {
	latestChannel = Number(req.body)
	res.send("okay")
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

	setTimeout(() => {
		const sources = finder.getCurrentSources()
		for (let i = 0; i < sources.length; i++) {
			console.log(i + ": " + sources[i].name)
		}
	}, 1000)
}

// updates the NDI streams in the API
async function sendNDIStreams() {

	let allSources: string[] = []

	const sources = finder.getCurrentSources()
	for (let i = 0; i < sources.length; i++) {
		allSources.push(sources[i].name)
	}
	if (allSources.length != 0) {
		latestNDISources = allSources
	}

}

// used to get the receiver at initilisation
// ensures receivers are present before sucessful running
async function getFirstReceiver() {

	await new Promise(resolve => {setTimeout(resolve, 1000)})

	const sources = finder.getCurrentSources()

	let source = sources[0]
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

		return receiver 
	} else {
		return null
	}
}

// update the global latest receiver
// will only update if it has successfully pulled sources
// this is necessary for stability
async function updateReceiver() {

	let index = 0

	const sources = finder.getCurrentSources()

	for (let i = 0; i < sources.length; i++) {
		if (latestAPIReceiver != null) {
			if (sources[i].name == latestAPIReceiver) {
				index = i
				break
			}
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
async function getFrame(receiver:grandiose.Receiver) {

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
	if(debug) {
		console.log("Get Frame :", endTime - startTime, "ms")
	}
}

// takes a data frame of RGB vales, and width and height of frame
// returns the average area of the frame
function areaAverage(startX:number, endX:number, startY:number, endY:number, frame:Frame) {
	
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
	getNDIStreams()
	sendNDIStreams()
	currentReceiver = await getFirstReceiver()
	previousAPIReceiver = latestAPIReceiver

	let artnet = require('artnet')({
		host: latestArtNetIP
	})

	while (true) {
		if(debug) {
			console.log("\nDebugging for latest frame:")
		}
		
		// artnet = require('artnet')({
		// 	host: latestArtNetIP
		// })

		let startTime = new Date().getTime()
		sendNDIStreams()

		if(debug) {
			console.log("Latest Colours   : ", latestColours)
			if(latestFrame != null) {
				console.log("Frame size       : ", latestFrame['width'], "x", latestFrame['height'])
			} else {
				console.log("Frame size       :  null")
			}
			console.log("Latest Range     : ", latestAPIRange)
			console.log("Previous Receiver: ", previousAPIReceiver)
			console.log("Latest Receiver  : ", latestAPIReceiver)
			console.log("Latest Sources   : ", latestNDISources)
			console.log("Latest IP Address: ", latestArtNetIP)
			console.log("Latest Channel   : ", latestChannel)
		}

		// only update receiver if it has changed
		if (latestAPIReceiver == previousAPIReceiver) {
			if(debug) {
				console.log("NDI receiver still the same")
			}
		} else {
			if(debug) {
				console.log("NDI receiver has been UPDATED")
			}
			await updateReceiver()
			previousAPIReceiver = latestAPIReceiver
		}

		if (currentReceiver){
			await getFrame(currentReceiver).then(myFrame => {
				// ensures a frame has been received
				if (myFrame) {
					// ensures valid range is used
					if (latestAPIRange === null) {
						latestColours = areaAverage(0, myFrame.width-1, 0, myFrame.height-1, myFrame)
					} else {
						latestColours = areaAverage(latestAPIRange.x0, latestAPIRange.x1, latestAPIRange.y0, latestAPIRange.y1, myFrame)
						artnet.set(latestChannel, [latestColours[0], latestColours[1], latestColours[2]])
					}
				}
			})
		} else {
			await new Promise(resolve => setTimeout(resolve, 500))
		}

		let endTime = new Date().getTime()
		if(debug) {
			console.log("This frame:", endTime - startTime, "ms")
		}

		// throttle for 30fps
		const waitTime = 33 - (endTime - startTime)
		if (waitTime > 0) {
			await sleep(waitTime)
		}
	}
})()

async function sleep(duration: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, duration))
}
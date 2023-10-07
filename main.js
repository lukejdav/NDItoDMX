function getImage() {
	const fs = require("fs")
	const PNG = require("pngjs").PNG

	const data = fs.readFileSync('./test_images/test.png')
	const png = PNG.sync.read(data)

	return png
}

// shows a list of avaliable streams and an index
async function getNDIStreams() {
	const grandiose = require('grandiose');

	const finder = new grandiose.GrandioseFinder()

	setTimeout(() => {
		const sources = finder.getCurrentSources()
		for(let i=0; i < sources.length; i++) {
			console.log(i +": "+ sources[i].name)
		}
	}, 1000)
}

async function getReceiver(input) {
	const grandiose = require('grandiose');

	const finder = new grandiose.GrandioseFinder()

	await new Promise(resolve => setTimeout(resolve, 1000))

	let source = finder.getCurrentSources()[input]

	const receiver = await grandiose.receive({
		source: source,
		colorFormat: grandiose.COLOR_FORMAT_RGBX_RGBA,
		bandwidth: grandiose.BANDWIDTH_HIGHEST,
		allowVideoFields: false,
		name: "main"
	}, );

	let timeout = 1000;

	// Hacky fix
	await receiver.video(timeout).catch(()=>null)

	return receiver
}

// get a single frame from the slected NDI stream
async function getFrame(receiver) {

	let timeout = 1000;

	try {
		let videoFrame = await receiver.video(timeout);
		const myFrame = ({
			width: videoFrame.xres,
			height: videoFrame.yres,
			data: videoFrame.data
		})
		return myFrame
	} catch (e) { console.error(e); }
}


// takes a data frame of RGB vales, and width and height of frame
function areaAverage(startX, endX, startY, endY, frame) {
	if(startX == -1) {
		startX = 0
	}
	if(endX == -1) {
		endX = frame.width - 1
	}
	if(startY == -1) {
		startY = 0
	}
	if(endY == -1) {
		endY = frame.height - 1
	}
	// console.log(startX, endX, startY, endY)
	if(startX >= frame.width || endX >= frame.width || startY >= frame.height || endY >= frame.height) {
		throw new Error("Area value overflow")
	}
	if(startX < 0 || endX < 0 || startY < 0 || endY < 0) {
		throw new Error("Area cannot be less than zero")
	}
	if(startX > endX || startY > endY) {
		throw new Error("Starts after end")
	}

	let redTotal = 0
	let greenTotal = 0
	let blueTotal = 0

	for(let y = startY; y <= endY; y++) {
		for(let x = startX; x <= endX; x++) {
			let pixelLocation = (x + y*frame.width) * 4
			redTotal += frame.data[pixelLocation + 0]
			greenTotal += frame.data[pixelLocation + 1]
			blueTotal += frame.data[pixelLocation + 2]
		}
	}

	let areaTotal = (endX - startX + 1) * (endY - startY + 1)
	redTotal = Math.round(redTotal/areaTotal)
	greenTotal = Math.round(greenTotal/areaTotal)
	blueTotal = Math.round(blueTotal/areaTotal)

	return [redTotal, greenTotal, blueTotal]

}

// let [a, b, c] = areaAverage(-1, -1, -1, -1, getImage())

// console.log(`Average is: ${a}, ${b}, ${c}`)


;(async () => {
	getNDIStreams()

	const receiver = await getReceiver(1)
	
	while (true){
		await getFrame(receiver).then(myFrame => {
			if(myFrame) {
				let [d, e, f] = areaAverage(-1, -1, -1, -1, myFrame)
		
				console.log(`Average is: ${d}, ${e}, ${f}`)
			}
		})
	}
})()
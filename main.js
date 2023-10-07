function getImage() {
	const fs = require("fs")
	const PNG = require("pngjs").PNG

	const data = fs.readFileSync('./test_images/test.png')
	const png = PNG.sync.read(data)

	return png
}

// // doesn't return a frame, only tries to log video frame
async function getFrame() {
	const grandiose = require('grandiose');

	const finder = new grandiose.GrandioseFinder()

	await new Promise(resolve => setTimeout(resolve, 1000))

	let source = finder.getCurrentSources()[1]

	const receiver = await grandiose.receive({
		source: source,
		colorFormat: grandiose.COLOR_FORMAT_RGBX_RGBA,
		bandwidth: grandiose.BANDWIDTH_HIGHEST,
		allowVideoFields: false,
		name: "main"
	}, );

	let timeout = 5000;

	// Hacky fix
	await receiver.video(timeout).catch(()=>null)

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

// needs changing to work for video frames, currently only works for images
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
	console.log(startX, endX, startY, endY)
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

let [a, b, c] = areaAverage(-1, -1, -1, -1, getImage())

console.log(`Average is: ${a}, ${b}, ${c}`)


getFrame().then(myFrame => {
	let [d, e, f] = areaAverage(-1, -1, -1, -1, myFrame)

	console.log(`Average is: ${d}, ${e}, ${f}`)
})

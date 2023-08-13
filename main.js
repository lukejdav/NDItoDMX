// const grandiose = require('grandiose');

// grandiose.find({showLocalSources: true})
// 	.then(console.log)
// 	.catch(console.error);

const fs = require("fs")
const PNG = require("pngjs").PNG

const data = fs.readFileSync('./test_images/red.png')
const png = PNG.sync.read(data)

function areaAverage(startX, endX, startY, endY) {
	if(startX = -1) {
		startX = 0
	}
	if(endX = -1) {
		endX = png.width - 1
	}
	if(startY = -1) {
		startY = 0
	}
	if(endY = -1) {
		endY = png.height - 1
	}

	if(startX >= png.width || endX >= png.width || startY >= png.height || endY >= png.height) {
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
			let pixelLocation = (x + y*png.width) * 4
			redTotal += png.data[pixelLocation + 0]
			greenTotal += png.data[pixelLocation + 1]
			blueTotal += png.data[pixelLocation + 2]
		}
	}

	let areaTotal = (endX - startX + 1) * (endY - startY + 1)
	redTotal = Math.round(redTotal/areaTotal)
	greenTotal = Math.round(greenTotal/areaTotal)
	blueTotal = Math.round(blueTotal/areaTotal)

	return [redTotal, greenTotal, blueTotal]

}

const [red, green, blue] = areaAverage(-1, -1, -1, -1)

console.log(`Average is: ${red}, ${green}, ${blue}`)
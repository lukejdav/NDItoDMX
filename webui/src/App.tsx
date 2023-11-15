import React, {useCallback, useState, useRef, useEffect} from 'react'
import './App.css'
import { useInterval } from 'usehooks-ts';

var frameX: number = 1920;
var frameY: number = 1080;

interface RectangleCoordinates {
	x0: number
	x1: number
	y0: number
	y1: number
}

function NDIblock() {

	const [rectangle, setRectangle] = useState<RectangleCoordinates>({ x0: 0, x1: frameX - 1, y0: 0, y1: frameY - 1 })
	const [NDIframe, setNDIframe] = useState<HTMLImageElement | null>(null)
	const [colours, setColours] = useState<Number[] | null>(null)

	const rectangleReset = () => setRectangle({ x0: 0, x1: frameX - 1, y0: 0, y1: frameY - 1 })

	const updateX0 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setRectangle((oldRectangle) => {
			if (newValue < 0 || newValue > oldRectangle.x1 || isNaN(newValue)) {
				return oldRectangle
			}
			return ({ ...oldRectangle, x0: newValue })
		})
	}, [])

	const updateX1 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setRectangle((oldRectangle) => {
			if (newValue < oldRectangle.x0 || newValue >= frameX || isNaN(newValue)) {
				return oldRectangle
			}
			return ({ ...oldRectangle, x1: newValue })
		})
	}, [])

	const updateY0 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setRectangle((oldRectangle) => {
			if (newValue < 0 || newValue > oldRectangle.y1 || isNaN(newValue)) {
				return oldRectangle
			}
			return ({ ...oldRectangle, y0: newValue })
		})
	}, [])

	const updateY1 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setRectangle((oldRectangle) => {
			if (newValue < oldRectangle.y0 || newValue >= frameY || isNaN(newValue)) {
				return oldRectangle
			}
			return ({ ...oldRectangle, y1: newValue })
		})
	}, [])

	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (canvas === null) {
			return
		}
		const context = canvas.getContext('2d')
		//Our first draw
		if (context === null) {
			return
		}
		context.fillStyle = '#FFFFFF'
		context.fillRect(0, 0, context.canvas.width, context.canvas.height)

		const scale = frameX / context.canvas.width

		const image = NDIframe
		if (image !== null) {
			context.drawImage(image,0,0,context.canvas.width,context.canvas.height)
		} 

		context.beginPath()
		context.rect(rectangle.x0/scale, rectangle.y0/scale, (rectangle.x1-rectangle.x0)/scale, (rectangle.y1-rectangle.y0)/scale)
		context.strokeStyle = 'RGBA(255,255,0,255)'
		context.lineWidth = 2
		context.stroke()

		context.beginPath()
		context.rect(rectangle.x0/scale-2, rectangle.y0/scale-2, (rectangle.x1-rectangle.x0)/scale+4, (rectangle.y1-rectangle.y0)/scale+4)
		context.strokeStyle = 'RGBA(255,0,255,255)'
		context.lineWidth = 2
		context.stroke()

	}, [rectangle, NDIframe])

	useInterval(()=> {
		const image = new Image()
		image.src = "/api/frame?t=" + Date.now()
		image.onload = () => {
			setNDIframe(image)
		}

		fetch("/api/colours").then(
			async (res) => {
				const data = await res.json()
				setColours(data)
			}
		)

		fetch("/api/range", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(rectangle)
		})
	}, 2000)



	return (
		<div className="NDIcontainer">

			<h1>Draw a box</h1>
			
			<canvas ref={canvasRef} width={frameX/2} height={frameY/2}>
				
			</canvas>
			<br></br>
			<div className="Selection">
				<table>
					<tr>
						<td><p>X Start</p></td>
						<td>
							<input type="number" min="0" max={rectangle.x1} style={{ width: "100px" }}
								onChange={updateX0}
								value={rectangle.x0}
							/>
						</td>
					</tr>
					<tr>
						<td><p>X End</p></td>
						<td>
							<input type="number" min={rectangle.x0} max={frameX - 1} style={{ width: "100px" }}
								onChange={updateX1}
								value={rectangle.x1}
							/>
						</td>
					</tr>
					<tr>
						<td><p>Y Start</p></td>
						<td>
							<input type="number" min="0" max={rectangle.y1} style={{ width: "100px" }}
								onChange={updateY0}
								value={rectangle.y0}
							/>
						</td>
					</tr>
					<tr>
						<td><p>Y End</p></td>
						<td>
							<input type="number" min={rectangle.y0} max={frameY - 1} style={{ width: "100px" }}
								onChange={updateY1}
								value={rectangle.y1}
							/>
						</td>
					</tr>
				</table>
				<button onClick={() => rectangleReset()}>
					Reset Rectangle
				</button>
				<p style={{color:colours ? `rgb(${colours[0]}, ${colours[1]}, ${colours[2]})`: ""}}>
					Colours = {colours ? `${colours[0]}, ${colours[1]}, ${colours[2]}`: ""}

				</p>
				{/* <p>
					DEBUGGING <br></br>
					XStart = {rectangle.x0} <br></br>
					XEnd = {rectangle.x1} <br></br>
					YStart = {rectangle.y0} <br></br>
					YEnd = {rectangle.y1}
				</p> */}
			</div>
		</div>
	)
}

function App() {
	return (
		<div>
			<NDIblock></NDIblock>
		</div>
	)
}

export default App

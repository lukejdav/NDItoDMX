import React, {useCallback, useState, useRef, useEffect} from 'react'
import './App.css'
import { useInterval } from 'usehooks-ts';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
// import './custom.scss';

var frameX: number = 1920;
var frameY: number = 1080;

interface RectangleCoordinates {
	x0: number
	x1: number
	y0: number
	y1: number
}

function NDIblock() {

	const [rectangle, setRectangle] = useState<RectangleCoordinates>({ x0: 100, x1: frameX - 100, y0: 100, y1: frameY - 100 })
	const [NDIframe, setNDIframe] = useState<HTMLImageElement | null>(null)
	const [colours, setColours] = useState<Number[] | null>(null)
	const [NDIsources, setNDIsources] = useState<string[] | null>(null)
	const [NDIselection, setNDIselection] = useState<string>("None")
	const [debug, setDebug] = useState<string | null>(null)

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

	const updateNDIsource = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		const newValue = String(e.target.value)
		setNDIselection(newValue)
	}, [])

	const canvasRef = useRef<HTMLCanvasElement>(null)

	const rgbToHex = (red:any, green:any, blue:any) => {
		const redHex = ('00' + red.toString(16).toUpperCase()).slice(-2)
		const greenHex = ('00' + green.toString(16).toUpperCase()).slice(-2)
		const blueHex = ('00' + blue.toString(16).toUpperCase()).slice(-2)
		return('#' + redHex + greenHex + blueHex)
	}

	useEffect(() => {
		const canvas = canvasRef.current
		if (canvas === null) {
			return
		}
		const context = canvas.getContext('2d')
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

	// update for dynamic wait length
	// TODO: batch the fetches so that the ui updates in sync
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

		fetch("/api/NDISources").then(
			async (res) => {
				const data = await res.json()
				setNDIsources(data)
			}
		)

		// TODO: Make this request when changing `NDIselection`
		fetch("/api/reciever", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify([NDIselection])
		})

	}, 500)

	return (
		<div className="NDIcontainer">

			<h1>Draw a box</h1>
			
			<canvas ref={canvasRef} width={frameX/2} height={frameY/2}>
				
			</canvas>
			<br></br>
			<div>
				<Container>
					<Row>
						<Col>
							NDI Source: {"\u2003"}
						</Col>
						<Col>
							<select name="sources" id="sources" style={{width: "100%"}} onChange={e => updateNDIsource(e)}>
								<option value = 'None'> None </option>
								{(NDIsources === null) ? "" : NDIsources.map((NDIsources, index) => {
									return (
										<option key={index}>
											{NDIsources}
										</option>
									);
								})}
							</select>
						</Col>
					</Row>
				</Container>
			</div>
			<br></br>
			<div className="Selection">
				<Container>
					<Row>
						<Col justify-content-end>
							X Start
						</Col>
						<Col>
							<input type="number" min="0" max={rectangle.x1} style={{ width: "100px" }}
								onChange={updateX0}
								value={rectangle.x0}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							X End
						</Col>
						<Col>
							<input type="number" min={rectangle.x0} max={frameX - 1} style={{ width: "100px" }}
								onChange={updateX1}
								value={rectangle.x1}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							Y Start
						</Col>
						<Col>
							<input type="number" min="0" max={rectangle.y1} style={{ width: "100px" }}
								onChange={updateY0}
								value={rectangle.y0}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							Y End
						</Col>
						<Col>
							<input type="number" min={rectangle.y0} max={frameY - 1} style={{ width: "100px" }}
								onChange={updateY1}
								value={rectangle.y1}
							/>
						</Col>
					</Row>
				</Container>
				<button onClick={() => rectangleReset()}>
					Reset Rectangle
				</button>
				<p>
					RGB = {colours ? `(${colours[0]}, ${colours[1]}, ${colours[2]})`: ""} <br></br>
					HEX = {colours ? rgbToHex(colours[0],colours[1],colours[2]): ""}
				</p>
				<div style={{backgroundColor:colours ? `rgb(${colours[0]}, ${colours[1]}, ${colours[2]})`: "", width:'40%', margin:'auto', minHeight:'40px'}}>
				</div>
				<br></br>
				<p>{debug}</p>
				<p>{NDIselection}</p>
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

import React, {useCallback, useState, useRef, useEffect} from 'react'
import './App.css'
import { useInterval } from 'usehooks-ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

var frameX: number = 1920;
var frameY: number = 1080;

interface RectangleCoordinates {
	x0: number
	x1: number
	y0: number
	y1: number
}

interface IPaddress {
	octet1: number
	octet2: number
	octet3: number
	octet4: number
}

function NDIblock() {

	const [rectangle, setRectangle] = useState<RectangleCoordinates>({ x0: 100, x1: frameX - 100, y0: 100, y1: frameY - 100 })
	const [NDIframe, setNDIframe] = useState<HTMLImageElement | null>(null)
	const [colours, setColours] = useState<Number[] | null>(null)
	const [NDIsources, setNDIsources] = useState<string[] | null>(null)
	const [NDIselection, setNDIselection] = useState<string>("None")
	const [artnetIP, setArtnetIP] = useState<IPaddress>({octet1: 127, octet2: 0, octet3: 0, octet4: 1})
	const [artnetChannel, setArtnetChannel] = useState<Number>(1)
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

	const updateOctet1 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setArtnetIP((oldArtnetIP) => {
			if (newValue <= 0 && newValue >= 255) {
				return oldArtnetIP
			}
			return({ ...oldArtnetIP, octet1: newValue})
		})
	}, [])

	const updateOctet2 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setArtnetIP((oldArtnetIP) => {
			if (newValue <= 0 && newValue >= 255) {
				return oldArtnetIP
			}
			return({ ...oldArtnetIP, octet2: newValue})
		})
	}, [])

	const updateOctet3 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setArtnetIP((oldArtnetIP) => {
			if (newValue <= 0 && newValue >= 255) {
				return oldArtnetIP
			}
			return({ ...oldArtnetIP, octet3: newValue})
		})
	}, [])

	const updateOctet4 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setArtnetIP((oldArtnetIP) => {
			if (newValue <= 0 && newValue >= 255) {
				return oldArtnetIP
			}
			return({ ...oldArtnetIP, octet4: newValue})
		})
	}, [])

	const updateArtNetChannel = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setArtnetChannel(newValue)
	}, [])

	const updateNDIsource = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		const newValue = String(e.target.value)
		setNDIselection(newValue)
	}, [])

	const updateArtNetIP = () => {
		if(artnetIP != null) {
			const newValue = String(artnetIP.octet1+"."+artnetIP.octet2+"."+artnetIP.octet3+"."+artnetIP.octet4)
			fetch("/api/ArtNetIP", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify([newValue])
			})
		}
	}

	const updateStartingChannel = () => {
		if(artnetChannel != null) {
			const newValue = String(artnetChannel)
			fetch("/api/ArtNetChannel", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify([newValue])
			})
		}
	}

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

		// add a manual refresh button
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
		<div className="Main">
			<h1>NDI to DMX</h1>
			<div className="NDICanvas">
				<canvas ref={canvasRef} width={Math.min(window.innerWidth,1600)} height={Math.min(window.innerWidth/16*9,900)}>
				</canvas>
			</div>
			<div className="NDIsources">
				<Container>
					<Row>
						<Col>
							<p>NDI Source:</p>
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
						<Col>
							<button>Refresh Sources</button>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="areaSelection">
				<Container>
					<Row>
						<Col style={{display:'flex', justifyContent:'right'}}>
							Start X:
						</Col>
						<Col style={{display:'flex', justifyContent:'left'}}>
							<input type="number" min="0" max={rectangle.x1} style={{ width: "100px" }}
								onChange={updateX0}
								value={rectangle.x0}
							/>
						</Col>
					</Row>
					<Row>
						<Col style={{display:'flex', justifyContent:'right'}}>
							End X:
						</Col>
						<Col style={{display:'flex', justifyContent:'left'}}>
							<input type="number" min={rectangle.x0} max={frameX - 1} style={{ width: "100px" }}
								onChange={updateX1}
								value={rectangle.x1}
							/>
						</Col>
					</Row>
					<Row>
						<Col style={{display:'flex', justifyContent:'right'}}>
							Start Y:
						</Col>
						<Col style={{display:'flex', justifyContent:'left'}}>
							<input type="number" min="0" max={rectangle.y1} style={{ width: "100px" }}
								onChange={updateY0}
								value={rectangle.y0}
							/>
						</Col>
					</Row>
					<Row>
						<Col style={{display:'flex', justifyContent:'right'}}>
							End Y:
						</Col>
						<Col style={{display:'flex', justifyContent:'left'}}>
							<input type="number" min={rectangle.y0} max={frameY - 1} style={{ width: "100px" }}
								onChange={updateY1}
								value={rectangle.y1}
							/>
						</Col>
					</Row>
					<button onClick={() => rectangleReset()}>
						Reset Rectangle
					</button>
				</Container>
			</div>
			<div className="ArtNetSelection">
				<Container>
					<Row class="align-items-center">
						<Col style={{display:'flex', justifyContent:'right', alignItems:"center"}}>
							IP Address: 
						</Col>
						<Col style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
							<div className="IPaddress">
								<input type="number" min={0} max={255} value={artnetIP.octet1} onChange={updateOctet1}/>.
								<input type="number" min={0} max={255} value={artnetIP.octet2} onChange={updateOctet2}/>.
								<input type="number" min={0} max={255} value={artnetIP.octet3} onChange={updateOctet3}/>.
								<input type="number" min={0} max={255} value={artnetIP.octet4} onChange={updateOctet4}/>
							</div>
						</Col>
						<Col style={{display:'flex', justifyContent:'left', alignItems:"center"}}>
							<button onClick={() => updateArtNetIP()}>Update IP Address</button>
						</Col>
					</Row>
					<Row>
						<Col style={{display:'flex', justifyContent:'right', alignItems:"center"}}>
							Starting Channel:
						</Col>
						<Col style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
							<input type="number" min={1} max={512} value={String(artnetChannel)} onChange={updateArtNetChannel}/>
						</Col>
						<Col style={{display:'flex', justifyContent:'left', alignItems:"center"}}>
							<button onClick={() => updateStartingChannel()}>Update Starting Channel</button>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="colourFeedback">
				<Container>
					<Row>
						<Col>
							RGB = {colours ? `(${colours[0]}, ${colours[1]}, ${colours[2]})`: ""} <br></br>
						</Col>
						<Col>
							HEX = {colours ? rgbToHex(colours[0],colours[1],colours[2]): ""}
						</Col>
					</Row>
					<Row>
						<div className="colourBox" style={{backgroundColor:colours ? `rgb(${colours[0]}, ${colours[1]}, ${colours[2]})`: "", minHeight: '40px'}}></div>
					</Row>
				</Container>
				{/* <p>{debug}</p> */}
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

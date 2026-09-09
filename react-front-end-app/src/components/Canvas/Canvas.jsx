
import { useState } from 'react'
//recieves current tool settings as props fom canvaspage
import './Canvas.css'

function Canvas(props) {

    // isDrawing tracks whether the mouse button is currently held down
    const [isDrawing, setIsDrawing] = useState(false)

    // starts when the user presses the mouse button
    function startDrawing(e) {
        
        //if stamp mode is active dont draw (conditional return)
        if (props.selectedTool === 'stamp') return

        // gets the drawing context from the canvas elemnt
        const ctx = props.canvasRef.current.getContext('2d')

        //1.start fresh
        // begin a new path so each stroke is independent
        ctx.beginPath()

        //2.pick up brush and place it at the start
        //move to sets the starting point of the line
        //the x and y coordinates of where the mouse
        // is relative to the canvas elemnt
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)

        //setIsDrawing to true so onMouseMove knows too start drawing
        setIsDrawing(true)
    }

    // this runs continuously as the mouse moves over the canvas
    function draw(e) {

        //if stamp mode is active dont draw (conditional return)
        if (props.selectedTool === 'stamp') return

        // if mouse button is not held down do nothing
        if (!isDrawing) return

        // gets the drawing context from the canvas elemnt
        const ctx = props.canvasRef.current.getContext('2d')

        // sets the color / prop passed fomr CanvasPage
        ctx.strokeStyle = props.color
        //sets the thickness / prop passed from CanvasPage
        ctx.lineWidth = props.brushSize
        // makes the pen tip smooth and rounded
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        //3.draw to the new position
        // lineTo draws a line from the last position to the current position
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        //4.make it visible
        // stroke actually makes the line visible on the canvas
        ctx.stroke()
    }

    // runs when the user releases the mouse button
    function stopDrawing() {
        if (!isDrawing) return
        // stops making lines
        setIsDrawing(false)
    }

    // placeStamp runs when the user clicksthe canvas in stampmode
    //draws the selected stamp image at the click coordinates
    function placeStamp(e) {

    //only place a stamp if youre in stamp mode and a stamp is seleccted
    //checks that you are in stamp mode and have a stamp selected
    if (props.selectedTool !== 'stamp' || !props.selectedStamp) return

    const ctx = props.canvasRef.current.getContext('2d')

    // create a new image object and set its source to theselected stamp
    const img = new Image()
    img.src = props.selectedStamp

    //have towait for the image to fully load could take a small sec 
    // onload fires it when its ready
    img.onload = () => {
    // x position minus half the stamp size so that the stamp is in the middle of the cursor
    // same for y
    // 100s at the end to redefine the size to 100x100
        ctx.drawImage(img, e.nativeEvent.offsetX - 50, e.nativeEvent.offsetY - 50, 100, 100)
    }
    }
    return (
        <canvas
            ref={props.canvasRef}
            className="canvas"
            width={900}
            height={600}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onClick={placeStamp}
            />
    )
}

export default Canvas
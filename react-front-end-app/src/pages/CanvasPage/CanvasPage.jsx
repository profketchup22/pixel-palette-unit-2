

import { useState, useRef } from 'react'
import Canvas from '../../components/Canvas/Canvas'
import ToolPanel from '../../components/ToolPanel/ToolPanel'
import './CanvasPage.css'


function CanvasPage({ currentUser }) { //recieves currentUser as a prop from App.jsx

    //setting up defaults for canvas page

    // tracks the currently selected brush color
    const [color, setColor] = useState('#000000')

    // how thick the brushstroke is
    const [brushSize, setBrushSize] = useState(5)

    // tracks whether the user is in brush or stamp mode
    const [selectedTool, setSelectedTool] = useState('brush')

    //selectedStamp tracks whether a stamp image is currently selected
    //starts as null meaning no stamp is selected yet
    const [selectedStamp, setSelectedStamp] = useState(null)

    // canvasRef gives CanvasPage direct access to the canvas element
    // so we can use clear to reach into the actual canvas
    const canvasRef = useRef(null)

    const [title, setTitle] = useState('')
    const [saveMessage, setSaveMessage] = useState('')

    //handleClear wipes the canvas clean
    // clearRect erases everythin from 0 0 to width and height of canvas
    function handleClear() {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    function isCanvasBlank(canvas) {
        const blankCanvas = document.createElement('canvas')
        blankCanvas.width = canvas.width
        blankCanvas.height = canvas.height
        return canvas.toDataURL() === blankCanvas.toDataURL()
    }
    async function handleSave() {
    const canvas = canvasRef.current
    if (!canvas) return

        if (isCanvasBlank(canvas)) {
        setSaveMessage('Please draw something before saving.')
        return
    }

    const imageData = canvas.toDataURL('image/png') // reads everything currently painted on the canvas and converts it into one long text string

    try {
        const response = await fetch('http://localhost:8080/api/artworks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                imageData: imageData,
                user: { id: currentUser.id }
            }),
        })

        if (response.ok) {
            setSaveMessage('Image saved successfully!')
        } else {
            setSaveMessage('Failed to save image.')
        }
    } catch {
        setSaveMessage('Error: Could not connect to the server.');
    }
}

    return (
        <div className="canvas-page">
            <ToolPanel
                color={color}
                setColor={setColor}
                brushSize={brushSize}
                setBrushSize={setBrushSize}
                selectedTool={selectedTool}
                setSelectedTool={setSelectedTool}
                onClear={handleClear}
                selectedStamp={selectedStamp}
                onSelectStamp={setSelectedStamp}
                currentUser={currentUser}
                title={title}
                setTitle={setTitle}
                onSave={handleSave}
                saveMessage={saveMessage}
            />

            <Canvas
                canvasRef={canvasRef}
                color={color}
                brushSize={brushSize}
                selectedTool={selectedTool}
                selectedStamp={selectedStamp}
            />

        </div>
    )
}

export default CanvasPage
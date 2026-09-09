

import { useState, useRef } from 'react'
import Canvas from '../../components/Canvas/Canvas'
import ToolPanel from '../../components/ToolPanel/ToolPanel'
import './CanvasPage.css'


function CanvasPage() {

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

    //handleClear wipes the canvas clean
    // clearRect erases everythin from 0 0 to width and height of canvas
    function handleClear() {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
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
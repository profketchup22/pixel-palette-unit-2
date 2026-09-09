import './ColorPicker.css'

//my color array
const colors =[
    '#000000',
    '#ffffff',
    '#ff3b3b',
    '#2196f3',
    '#ffdd57',
    '#4caf50',
    '#b596f9',
    '#ff69b4',
    '#795548',
    '#FFE2CF',
]

function ColorPicker(props) {
    return (
        <div className="color-picker">
            <label className="tool-label">Color</label>
            <div className="color-swatches">
                {colors.map((color) => (
                    <button
                    //converted colors to color hexadecimal code
                    key={color}
                    className="color-swatch"
                    // inline css styling for the color swatch buttons
                    style={{
                        backgroundColor: color,
                        border: props.color === color ? '3px solid #fff' : '3px solid #333'
                    }}

                    onClick={() => props.setColor(color)}
                    />        
                ))}
            </div>
        </div>
    )
}

export default ColorPicker
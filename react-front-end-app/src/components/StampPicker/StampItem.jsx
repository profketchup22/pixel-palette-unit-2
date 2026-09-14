// represents a single stamp in stamp picker
// a child component of stamppicker

import './StampItem.css'

function StampItem(props) {
    return (
        //ternary operator
        // if this stamp is currently selected add the active class to highlight it or else just use stamp item
        <div
        className={props.selectedStamp === props.stamp.src ? 'stamp-item active' : 'stamp-item'}
        // on click calls on select with this stamps src path.
        // tells stampicker and eventualy canvaspage which stmap is selected
        onClick={() => props.onSelect(props.stamp.src)}
        >
        
        <img
        // displays the image of the stamp.
        //src and alt both come from stamp object passed in as a prop
        //alt text describes the stampfor accesibility
            src={props.stamp.src}
            alt={props.stamp.name}
            className="stamp-image"
            />
        </div>
    )
}

export default StampItem
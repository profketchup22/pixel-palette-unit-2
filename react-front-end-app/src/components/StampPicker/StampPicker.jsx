// displays the full collection of stamps
//this is alist component it renders a StampItem for each stamp
// gets selectedStamp and onSelectedStamp as props from toolpanel

import StampItem from './StampItem'
import './StampPicker.css'

// array of stamp objects they have a name and a source path
//src paths point to the public/stamps folder
const stamps = [
    { name: 'Luigi', src: '/stamps/luigigif1.png'},
    { name: 'Bulby', src: '/stamps/bulbygif1.png'},
    { name: 'Yoshi', src: '/stamps/yoshigif1.png'},
    { name: 'Backpack', src: '/stamps/backpackgif1.png'},
]

function StampPicker(props) {

    return (
        <div className="stamp-picker">
           <label className="stamp-label">Stamps to choose:</label> 
                <div className="stamp-list">
                {stamps.map((stamp) => (
                //.map loops through the stamps array and 
                //returns a StampItem for each one 
                //list component rendering item components

                // key uses stamp source since every stamp has a unique src 
                // passes the stamp object, selectedStamp, and onSelect down as props
                    <StampItem
                        key={stamp.src}
                        stamp={stamp}
                        selectedStamp={props.selectedStamp}
                        onSelect={props.onSelectStamp}
                    />
                 ))}
                 </div>
        </div>
    )
}

export default StampPicker
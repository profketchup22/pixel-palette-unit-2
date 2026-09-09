import './Button.css'

// defines the button component. props insidethe parenthesis
//  means this component accepts data from any parent
//  component that uses it
function Button(props) {
    return (
// className="button"-connects to the css 
// onClick={props.onClick}-the function the parent passes in. curly braces make it javascript
// type={props.type}-the parent passes in "button" and we pass it through to the html button
        <button className="button" onClick={props.onClick} type={props.type}>
          {props.label}
        </button>
    )
}

export default Button
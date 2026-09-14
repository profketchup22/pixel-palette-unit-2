
import {useState} from 'react'
import './SuggestionForm.css'

function SuggestionForm() {
    //tracks what the user types
    const [suggestion, setSuggestion] = useState('')
    //tracks whetherthe form has been submitted
    const [submitted, setSubmitted] = useState(false)
    //runs when the user clicks submit
    function handleSubmit(e) {
        //stops the page from refreshing onform submit
        e.preventDefault()
        // if the form is emty do nothing
        if (suggestion === '') return
        //if the form is filled mark as submitted
        setSubmitted(true)
    }

    //if submitteed istrue show success message
    if (submitted) {
        return (
            <div className="suggestion-success">
                <p>Thanks for your suggestion!</p>
            </div>
        )
    }

    return (
        <div className="suggestion-form-container">
        <h2 className="suggestion-title">Got a Suggestion?</h2>

        <form className="suggestion-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-input"
                placeholder="suggest a feature or stamp!"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
            />

            <button className="form-submit-button" type="submit">
                Submit
            </button>
        </form>
    </div>
  )

}

export default SuggestionForm
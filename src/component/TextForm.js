import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUperCaseClick = () => {
        console.log("Upper case was clickd")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("onChange");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text hear');
    // text = "new text"  // Wrong way to change the state                
    // setText = ("new text")  // correct way to change the state                

    return (
        <>
            <div className='container'>
                <h3>{props.heading} </h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
                </div>

                <button className="btn btn-info" onClick={handleUperCaseClick}>Convert Text to UpperCase</button>

            </div>
            <div className="container">
                <h3>Your Text Summary</h3>
                <p> {text.split(" ").length} Words & {text.length} Character</p>
                <p>{0.008 * text.split(" ").length } --Minutes ro read in slow speed</p>
                <p>{0.0033 * text.split(" ").length} --Minutes ro read in fast speed</p>
                
                <h3>Preview</h3>
                <p>{ text}</p>

            </div>
        </>

    )
}

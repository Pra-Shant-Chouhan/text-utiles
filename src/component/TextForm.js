import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUperCaseClick = () => {
        // console.log("Upper case was clickd")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerCaseClick = () => {
        // console.log("Upper case was clickd")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleRemoveSpecilChrClick = () => {
        // console.log("Upper case was clickd")
        
        let newText = text.replace(/[^a-zA-Z ]/g, "") // it removes numbers also
        // let newText = text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
        // let newText = text.replace(/[^a-zA-Z0-9]/g, '');

        setText(newText)
    }

    const handleClearCaseClick = () => {
        // console.log("Upper case was clickd")
        let newText = ''
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("onChange");
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

                <button className="btn btn-info mx-2 " mx-3 onClick={handleUperCaseClick}>Convert Text to UpperCase</button>
                <button className="btn btn-warning mx-2 " mx-3 onClick={handleLowerCaseClick}>Convert Text to LowerCase</button>
                <button className="btn btn-danger mx-2 " mx-3 onClick={handleClearCaseClick}>Clear Text</button>
                <button className="btn btn-success mx-2 " mx-3 onClick={handleRemoveSpecilChrClick }>Remove Speical Charcter</button>

            </div>
            <div className="container">
                <h3>Your Text Summary</h3>
                <p><b> {text.split(" ").length} </b>Words &<b> {text.length} </b>Character</p>
                <p><b>{0.008 * text.split(" ").length } </b>--Minutes ro read in slow speed</p>
                <p><b>{0.0033 * text.split(" ").length}</b> --Minutes ro read in fast speed</p>
                
                <h3>Preview</h3>
                <p>{ text}</p>

            </div>
        </>

    )
}

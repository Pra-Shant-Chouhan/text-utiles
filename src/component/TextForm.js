import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUperCaseClick = () => {
        // console.log("Upper case was clickd")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLowerCaseClick = () => {
        // console.log("Upper case was clickd")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleRemoveSpecilChrClick = () => {
    
        
        // let newText = text.replace(/[^a-zA-Z ]/g, "") // it removes numbers also
        // let newText = text.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "") //or write each specil charct
        let newText = text.replace(/[^a-z A-Z 0-9]/g, " ");
        // let newText = text.replace(/[^a-z A-Z 0-9]/g, "*");  //it removes special charcter and fill with star
        setText(newText)
        props.showAlert("All Special Charcter Removed","success")
    
    }

    const handleClearCaseClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Clear all","success")
    }
    const handleCopy = () => {
        
        
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to ClippBord","success")
    }
    const handlRemExtraSpaces = () => {
        let newText = text.split(/[  ]+/ )
        setText(newText.join(" "))
        props.showAlert("Clear All extra Spaces","success")
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
            <div className='container' style= {{color: props.mode=== 'dark' ? 'white' : 'black'}} >
                <h3 className="my-3solv">{props.heading} </h3>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor: props.mode=== 'dark' ? '#13466e' : 'white' ,color: props.mode=== 'dark' ? 'white' : 'black' }} id="myBox" rows="9"></textarea>
                </div>

                <button disabled = {text.length===0} className="btn btn-info mx-2 my-2" onClick={handleUperCaseClick}>Convert Text to UpperCase</button>
                <button disabled = {text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleLowerCaseClick}>Convert Text to LowerCase</button>
                <button disabled = {text.length===0} className="btn btn-danger mx-2 my-2 " onClick={handleClearCaseClick}>Clear Text</button>
                <button disabled = {text.length===0} className="btn btn-success mx-2 my-2" onClick={handleRemoveSpecilChrClick }>Remove Speical Charcter</button>
                <button disabled = {text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleCopy}>Copy</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlRemExtraSpaces}>Remove Extra spaces</button>

            </div>
            <div className="container" style= {{color: props.mode=== 'dark' ? 'white' : 'black'}}  >
                <h3>Your Text Summary</h3>
                <p><b> {text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} </b>Words and &<b> {text.length} </b>Character</p>
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } </b>--Minutes ro read in slow speed</p>
                <p><b>{0.0033 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> --Minutes ro read in fast speed</p>
                
                <h3>Preview</h3>
                <p>{ text.length >0 ? text: "Enter something To preview it Here"}</p>

            </div>
        </>

    )
}

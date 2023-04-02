import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUppercase = () => {
        let newT = Text.toUpperCase();
        setText(newT);
        props.showalert("Conveted to UpperCase", "success")

    }

    const handleLowercase = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showalert("Conveted to LowerCase", "success")
    }
    const handleClear = () => {
        setText("");
        props.showalert("All text removed", "success")
    }
    const handlecopy = () => {
        var copy = document.getElementById("mybox");
        copy.select();
        navigator.clipboard.writeText(copy.value)
        props.showalert("text copied in clipboard ", "success")
    }
    const handleExSp = () => {
        let extra = Text.split(/[ ]+/)
        setText(extra.join(" "));
        props.showalert("Removed ExtraSpaces", "success")
    }

    const handleOnchange = (event) => {

        setText(event.target.value);

    }
    const [Text, setText] = useState("Enter Your Text here ")
    return (
        <div className="container">
            <div className="container">
                <h2 style={{ textAlign: "center", border: `3px solid ${props.mode === 'light' ? 'black' : 'white'}`, margin: "30px", color: props.mode === 'light' ? 'black' : 'white' }}><b>{props.heading}</b></h2>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" style={{ fontSize: "25px", color: props.mode === 'light' ? 'black' : 'white' }} className="form-label"><b>{props.text}</b></label>
                <textarea className="form-control"  onChange={handleOnchange} id="mybox" value={Text} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} rows="8"></textarea>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <button type="button" className="btn btn-primary " onClick={handleUppercase} >Convert To Uppercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLowercase} >Convert To Lowercase</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleClear} >Clear Text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handlecopy} >copy Text</button>
                <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleExSp} >Remove extra spaces</button>
            </div>
            <div className='my-4' style={{ color: props.mode === 'light' ? 'black' : 'white' }}  >
                <h3> Your Text Summary</h3>
                <p> Total Words {Text.split(" ").length - 1}  And   {Text.length} Total Characters</p>
                <p> {0.008 * Text.split(" ").length} Minutes to Read</p>
                <h3>Preview</h3>
                <p>{Text}</p>
                {/* <p> {Text.length>0?Text: "Enter your Text to Preview it"} </p> */}

            </div>
        </div>
    )
}

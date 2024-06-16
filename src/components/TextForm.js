import {useState} from 'react'

export default function TextForm(props){
    const[text,setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower case","success")
    }
    const clearText = () => {
        setText("")
        props.showAlert("All text is cleared","success")
    }
    const handlecopy = () => {
        var text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied","success")
    }
    const handleextraspaces = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return(
        <>
        <div className='container' style={{color : props.mode==="dark"?"white":"black"}}>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" style={{backgroundColor : props.mode==="dark"?"grey":"white",color : props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleextraspaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color : props.mode==="dark"?"white":"black"}}>
            <h2 >Your text summary,</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h3>Preview,</h3>
            <p>{text.length>0?text:"Enter Text to get preview"}</p>
        </div>
        </>
    )
}
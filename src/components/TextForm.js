import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase!","success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase!","success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }
  const handleOnChange = (event)=>{
    // console.log("On change ");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!","success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/\s+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
  }

  const [text, setText] = useState('');
  // text = "new text" // wrong way to change the state
  // setText("new Text"); // correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Covert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text :"Nothing to preview!"}</p>
      </div>
    </>
  );
}

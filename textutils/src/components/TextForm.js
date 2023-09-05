import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase Btn was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        // console.log("Lowercase Btn was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText = ()=>{
        // console.log("Lowercase Btn was clicked");
        let newText = '';
        setText(newText);
    }

    const handleCapitalCase = ()=>{
        // console.log("Lowercase Btn was clicked");
        let newText = '';
        let textArr = text.split(" ");
        for (let index = 0; index < textArr.length; index++) {
            textArr[index] =  textArr[index].charAt(0).toUpperCase() + textArr[index].slice(1);
            newText += textArr[index] + " ";
        }
        setText(newText);
    }

    const handleAltCase = ()=>{
        // debugger
        let newText = '';
        let textArr = text.split(" ");
        for (let index = 0; index < textArr.length; index++) {
            let newWord = '';
            for (let i = 0; i < textArr[index].length; i++) {
                if (i%2===0) {
                    newWord += textArr[index].charAt(i).toLowerCase();
                }
                else {
                    newWord += textArr[index].charAt(i).toUpperCase();
                }
            }
            newText += newWord + " ";
        }
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalCase}>Capitalized Case</button>
            <button className="btn btn-primary mx-2" onClick={handleAltCase}>aLtErNaTiNg cAsE</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>

        </div>
        <div className="container my-3">
            <h2>Your Text Summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes taken to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}


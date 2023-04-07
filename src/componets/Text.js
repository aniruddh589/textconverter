import React, { useState } from 'react'

const Text = () => {
    const [text, setTest] = useState("");

    const handleOnCHange = (event)=> {
        setTest(event.target.value);
    }

    const handleUpCase = ()=> {
        let newText = text.toUpperCase();
        setTest(newText)
    }

    const handleLoCase = ()=> {
        let newText = text.toLowerCase();
        setTest(newText)
    }

    const handleClear = ()=> {
        let clearText = ("");
        setTest(clearText)
    }

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setBtntext] = useState("Enable Dark Mode")
    const toogleStyle =()=> {
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtntext("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntext("Enable Dark Mode");
        }
    }

  return (
    <>
    <div className='p-4 mt-5 rounded' style={myStyle}>
        <div className="form-group">
            <h3><label htmlFor="textDemo">Example textarea</label></h3>
            <textarea className="form-control" value={text} onChange={handleOnCHange} id="textDemo" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mt-3 mx-1' onClick={handleUpCase}>Text Uppercase</button>
        <button className='btn btn-primary mt-3 mx-1' onClick={handleLoCase}>Text Lowercase</button>
        <button className='btn btn-primary mt-3 mx-1' onClick={handleClear}>Clear</button>

        <div className='my-3'>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
            <p>{0.010 * text.split(" ").length - 0.010} Minutes Read.</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        <div>
            <button className='btn btn-primary mt-3 mx-1' onClick={toogleStyle}>{btntext}</button>
        </div>
    </div>
    </>
  )
}

export default Text
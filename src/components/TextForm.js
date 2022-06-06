import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was cliced")
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleLowClick = ()=>{
    console.log("uppercase was cliced")
    let newText = text.toLowerCase();
    setText(newText)

  }
  const handleClearClick = ()=>{
    // console.log("uppercase was cliced")
    let newText = ''
    setText(newText)

  }
  const handleCapitaliseClick = ()=>{
    // console.log("uppercase was cliced")
    let newText = text[0].toUpperCase()+ text.slice(1);
    setText(newText)

  }
  const handleTitleClick = ()=>{
    let TitleCase = text.split(" ");
    let Text = []
    TitleCase.map((Element) =>{
      Text.push(Element[0].toUpperCase()+Element.slice(1));
    })
    setText(Text.join(' '))
    
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

  const handleOnChange = (event)=>{
    console.log("ON CHANGE")
    setText(event.target.value);
  }
  const [text , setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1> {props.heading} </h1> 
      <div  className="mb-3 ">    
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#292d31':'white', color: props.mode==='dark'?'white':'#292d31'}} id="myBox" rows="8"></textarea>
      <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>UPPER CASE</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>lowercase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}> Clear </button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleCapitaliseClick}>Capitalise case </button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleTitleClick}>Title Case </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary </h1>
      <p>{text.split(" ").length} words and {text.length} characters are in.</p>
      <p>{0.008 * text.split(" ").length} minutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  )
}

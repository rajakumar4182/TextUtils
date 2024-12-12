// import React, { useState } from 'react'
import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color:'black ',
    //     backgroundColor:'white'
    // })
    let myStyle = {
        color: props.mode === 'dark' ? 'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#042743':'white',   
    }

    // const[btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = ()=>{
    //     console.log("Clicked");
    //     if(myStyle.color === 'black'){
    //         setMyStyle ({color:'white',
    //             backgroundColor:'black',
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle ({color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    return (
    
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analze your text quickly and efficiently. Be it word count, character count or
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"  data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils report the number of words and characters. Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in Facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}

import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleImproveClick = () => {
        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
    }
    const handleChange = (event) => {
        console.log("change")
        setText(event.target.value)
    }
    const handleClear = () => {
        setText('')
    }


    return <div>
        <div className="form-group container">
            <h2 className="text-center">{props.head}</h2>
            <textarea className="form-control" id="txt" value={text} onChange={handleChange} rows="5"></textarea>
            <button className="btn btn-primary mt-2 btn-sm mx-2 " onClick={handleUpClick}>Capitalize</button>
            <button className="btn btn-dark mt-2 btn-sm mx-2" onClick={handleLoClick}>Smallase</button>
            <button className="btn btn-success mt-2 btn-sm mx-2" onClick={handleImproveClick}>Improve</button>
            <button className="btn btn-danger mt-2 btn-sm mx-2" onClick={handleClear}>Clear</button>
            <div className="my-3">

                <p>Words : {text.split(" ").filter((t) => t !== "").length}</p>

                <p>Characters : {text.length}</p>
                <p>Time To Read (in minutes): {0.005 * text.split(" ").filter((t) => t !== "").length}</p>
                <h2>Preview : {text}    </h2>
            </div>
        </div>

    </div>;
}

TextForm.propTypes = {
    text: PropTypes.string
}

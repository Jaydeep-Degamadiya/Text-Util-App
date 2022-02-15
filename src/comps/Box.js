import React, { useState } from 'react';

export default function Box() {
    const [mystyle, setmyStyle] = useState({
        backgroundColor: 'yellow',
        height: '400px',
        width: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });

    const [btntext, setbtntext] = useState("Big And Yellow");

    let changeStyle = () => {
        if (mystyle.backgroundColor === 'yellow') {
            setmyStyle(
                {
                    backgroundColor: 'red',
                    height: '200px',
                    width: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            )
            setbtntext("red And small")
            setbtnClass("btn btn-sm btn-warning")
        }
        else {
            setmyStyle(
                {
                    backgroundColor: 'yellow',
                    height: '400px',
                    width: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            )
            setbtntext("big and yellow")
            setbtnClass("btn btn-lg btn-danger")
        }

    }


    const [btnClass, setbtnClass] = useState("btn btn-lg btn-danger");

    return <div>
        <div className="container text-center my-5" style={mystyle}>
            <button type="button" onClick={changeStyle} class={btnClass}>{btntext}</button>
        </div>
    </div>;
}

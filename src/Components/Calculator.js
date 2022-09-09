import React, { useState } from "react";

function Calculator(){

    const [result, setResult] = useState("");

    const buttonClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clearButton = () => {
        setResult("");
    }

    const deleteButton = () => {
        setResult(result.slice(0, -1))
    }

    const equalButton = () => {
        setResult(eval(result));
    }

    return(
        <div className="container">
            <input type="text" value={result}/>
            <div className="keyboard">
                <button onClick={clearButton} id="clear-btn">Clear</button>
                <button onClick={deleteButton}>Del</button>
                <button onClick={buttonClick} name="/">&divide;</button>
                <button onClick={buttonClick} name="7">7</button>
                <button onClick={buttonClick} name="9">8</button>
                <button onClick={buttonClick} name="9">9</button>
                <button onClick={buttonClick} name="*">&times;</button>
                <button onClick={buttonClick} name="4">4</button>
                <button onClick={buttonClick} name="5">5</button>
                <button onClick={buttonClick} name="6">6</button>
                <button onClick={buttonClick} name="+">+</button>
                <button onClick={buttonClick} name="1">1</button>
                <button onClick={buttonClick} name="2">2</button>
                <button onClick={buttonClick} name="3">3</button>
                <button onClick={buttonClick} name="-">-</button>
                <button onClick={buttonClick} name="0">0</button>
                <button onClick={buttonClick} name=".">.</button>
                <button onClick={equalButton} id="equal-btn">=</button>
            </div>
        </div>
    )
}

export default Calculator;
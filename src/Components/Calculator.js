import React, { useState } from "react";

function Calculator() {

        const [result, setResult] = useState("");

        const buttonClick = (e) => {
            
            // switch(e.target.name){
            //     case "/": setResult(result + e.target.name); break;
            //     case "7": setResult(result + e.target.name); break;
            //     case "8": setResult(result + e.target.name); break;
            //     case "9": setResult(result + e.target.name); break;
            //     case "*": setResult(result + e.target.name); break;
            //     case "4": setResult(result + e.target.name); break;
            //     case "5": setResult(result + e.target.name); break;
            //     case "6": setResult(result + e.target.name); break;
            //     case "+": setResult(result + e.target.name); break;
            //     case "1": setResult(result + e.target.name); break;
            //     case "2": setResult(result + e.target.name); break;
            //     case "3": setResult(result + e.target.name); break;
            //     case "-": setResult(result + e.target.name); break;
            //     case "0": setResult(e.target.name); break;
            //     case ".": setResult(result + e.target.name); break;
            // }

            setResult(result.toString().concat(e.target.name));
        }

        const clearButton = () => {
            setResult("");
        }

        const deleteButton = () => {
            if(result === "Error"){
                setResult("");
            }else{
                setResult(result.toString().slice(0, -1));
            }
        }
            

        const equalButton = () => {
            try{
                setResult(eval(result));
            }catch(error){
                setResult("Error");
            }
        }

        return(
            <div className="container">
                <div className="output">{result}</div>
                <div className="keyboard">
                    <button onClick={clearButton} id="clear-btn">Clear</button>
                    <button onClick={deleteButton}>Del</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="/">&divide;</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="7">7</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="8">8</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="9">9</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="*">&times;</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="4">4</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="5">5</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="6">6</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="+">+</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="1">1</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="2">2</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="3">3</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="-">-</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name="0">0</button>
                    <button onClick={buttonClick} onKeyDown={buttonClick} name=".">.</button>
                    <button onClick={equalButton} id="equal-btn">=</button>
                </div>
            </div>
        )
    }

export default Calculator;
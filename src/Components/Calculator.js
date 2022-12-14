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

                if(result.length < 16){
                    setResult(result.toString().concat(e.target.name));
                }else{
                    return;
                }

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

        const signButton = (e) => {
            if(result === ""){
                return 0;
            }else{
                setResult(result.toString().concat(e.target.name));
            }
        }
            
        const decimalButton = (e) => {
            if( result.toString().includes(".") === true || result === ""){
                return 0;
            }else{
                setResult(result.toString().concat(e.target.name));
            }
        }

        const percentButton = (e) => {
            if( result.toString().includes("%") === true || result === ""){
                return 0;
            }else{
                setResult(result.toString().concat(e.target.name));
            }
        }

        const invertButton = (e) => {
            setResult(result.slice(-1) * -1)
        } 

        const equalButton = () => {
            const res = eval(result);
            
            if (isFinite(parseFloat(res))) {
                try{
                    setResult(eval(result));
                }catch(error){
                    setResult("Error");
                }       
              }else{
                return setResult("Error");
              }

              //percentage

              if(result.includes("%")){
                let percentSign = result.indexOf("%");
                let value1 = result.slice(percentSign + 1);
                let value2 = result.slice(0, percentSign);
  
                setResult((value1/100) * value2)
              }
        }

        console.log(2+2*3);
    
        return(
            <div className="container-calculator">
                <div className="output">{result}</div>
                <div className="keyboard">
                    <button onClick={clearButton} id="clear-btn">Clear</button>
                    <button onClick={deleteButton}>Del</button>
                    <button onClick={percentButton} name="%">%</button>
                    <button onClick={signButton} name="/">&divide;</button>
                    <button onClick={buttonClick} name="7">7</button>
                    <button onClick={buttonClick} name="8">8</button>
                    <button onClick={buttonClick} name="9">9</button>
                    <button onClick={signButton} name="*">&times;</button>
                    <button onClick={buttonClick} name="4">4</button>
                    <button onClick={buttonClick} name="5">5</button>
                    <button onClick={buttonClick} name="6">6</button>
                    <button onClick={signButton} name="+">+</button>
                    <button onClick={buttonClick} name="1">1</button>
                    <button onClick={buttonClick} name="2">2</button>
                    <button onClick={buttonClick} name="3">3</button>
                    <button onClick={signButton} name="-">-</button>
                    <button onClick={buttonClick} name="0">0</button>
                    <button onClick={decimalButton} name=".">.</button>
                    <button onClick={invertButton} name ="+/-">&plusmn;</button>
                    <button onClick={equalButton} id="equal-btn">=</button>
                </div>
            </div>
        )
    }

export default Calculator;
import React, { useState } from "react";

function VATCalculator(){
    const [amount, setAmount] = useState("");
    const [options, setOptions] = useState("");
    const [result, setResult] = useState("");
    const [change, setChange] = useState("");

    const addedVAT = () => {
        const addVatResult = parseFloat(amount) + parseFloat(options) * parseFloat(amount);
        const addedValue = parseFloat(amount) * parseFloat(options);
        if(options == 0){
            alert("Choose VAT rate!!!");
        }else{
            setResult(addVatResult.toFixed(2));
            setChange(addedValue.toFixed(2));
        }
    }

    const removedVAT = () => {
        const removeVatResult = parseFloat(amount) / (1 + parseFloat(options));
        const removedValue = parseFloat(amount) - removeVatResult;

        if(options == 0){
            alert("Choose VAT rate!!!");
        }else{
            setResult(removeVatResult.toFixed(2));
            setChange(removedValue.toFixed(2));
        }
    }

    return(
        <div className="containerPdv">
            <div className="inputFields">
                <form>
                    <label>Amount:</label><br/>
                    <input type="text" onChange={e => {setAmount(e.target.value)}}/><br/>
                    <label>VAT:</label><br/>
                    <select onChange={e => {setOptions(e.target.value)}}>
                        <option value="0">Choose VAT rate!</option>
                        <option value="0.2">General rate - 20%</option>
                        <option value="0.1">Special rate - 10%</option>
                    </select>
                </form>

                <button id="addVAT" onClick={addedVAT}>Add VAT</button>
                <button id="removeVAT" onClick={removedVAT}>Remove VAT</button>
            </div>

            <div className="result">
                <label>Amount:</label><br/>
                <label>{amount}</label><br/>
                <label>VAT at {options*100}%</label><br/>
                <label>{change}</label><br/>
                <label>Result:</label><br/>
                <label>{result}</label>
            </div>
        </div>
    )
}

export default VATCalculator;
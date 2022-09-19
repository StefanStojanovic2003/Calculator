import React, { useState } from "react";

function PDVCalculator(){
    let PDV = 20/100;

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");
    const [added, setAdded] = useState("");
    const [removed, setRemoved] = useState("");

    const CalcPdv = () => {
        setAdded(amount * PDV);

        let resultAdded = parseFloat(amount) + (parseFloat(amount) * PDV);
        let resultRemoved = parseFloat(amount) - (parseFloat(amount) * PDV);

        setResult(resultAdded);  
    }

    return(
        <div className="containerPdv">
            <div className="headingPdv">PDV = 20%</div>

            <table>
                <thead>
                    <tr>
                        <td>Amount</td>
                        <td>Result</td>
                        <td>Added based on VAT</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label> + PDV =</label>
                            <input id="pdvPlus" type="text" onChange={e => {setAmount(e.target.value)}}/><br/>
                        </td>
                        <td>
                            <input id="resultPlusPdv" type="text" defaultValue={result}/>
                        </td>
                        <td>
                            <input id="addedPlusPdv" type="text" defaultValue={added}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label> - PDV =</label>
                            <input id="pdvMinus" type="text" onChange={e => {setAmount(e.target.value)}}/>
                        </td>
                        <td>
                            <input id="resultMinusPdv" type="text" defaultValue={result}/>
                        </td>
                        <td>
                            <input id="addedMinusPdv" type="text" defaultValue={removed}/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button id="calculateButton" onClick={CalcPdv}>Calculate</button>
            
        </div>
    )
}

export default PDVCalculator;
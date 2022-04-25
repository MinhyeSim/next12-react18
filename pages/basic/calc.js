import axios from "axios";
import React, { useState } from "react";

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const {num1, opcode, num2} = inputs;

    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/basic/calc', inputs)
        .then(res => {
            const calc = res.data
            document.getElementById('result').innerHTML= `
            <h3> 숫자1 : ${calc.num1}</h3>
            <h3> 연산자 : ${calc.opcode}</h3>
            <h3> 숫자2 : ${calc.num2}</h3>
            <h3> 결과 : ${calc.calc}</h3>
            `
        })
        .catch(err => alert(err))

    }
    return (<div>   
        <form onSubmit={handleSubmit}>
            <h1>Calc폼</h1>
            <div>
                <label><b>num1</b></label>
                <input type = "num1" name="num1" onChange={handleChange}/><br/>

                <label htmlFor=""><b>opcode</b></label>
                <select name="opcode" onChange={handleChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="%">%</option>
                </select><br/>

                <label><b>num2</b></label>
                <input type = "num2" name="num2" onChange={handleChange}/><br/> 

                <input type="submit" value="계산 결과" /><br />

            </div>               
        </form>    
        <div> 결과 : <span id ="result"></span></div>
        </div>
    )
}
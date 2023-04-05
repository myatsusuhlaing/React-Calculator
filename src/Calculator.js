import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function Calculator(){
const [expression,setExpression] = useState('');

const input = (value) => {
    const newExpression = expression + value;
    setExpression(newExpression);
};

const blank = () =>{
    setExpression('');  //clear previous data
};

const calculate = () => {
    const answer = evaluate(expression);
    const newExpression = expression + '\n' + answer ; 
    setExpression(newExpression);
}
    return(
        <>
        <div className="calculator">
        <div className="input">
            <div className="row">
            <textarea name="" id="inputArea" value={expression} cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className="button">
            <div className="row">
            <div className="col" onClick={() => input('1')}>1</div>
            <div className="col" onClick={() => input('4')}>4</div>
            <div className="col" onClick={() => input('7')}>7</div>
            <div className="col" onClick={blank}>c</div>
            </div>
            <div className="row">
            <div className="col" onClick={() => input('2')}>2</div>
            <div className="col" onClick={() => input('5')}>5</div>
            <div className="col" onClick={() => input('8')}>8</div>
            <div className="col" onClick={() => input('0')}>0</div>
            </div>
            <div className="row">
            <div className="col" onClick={() => input('3')}>3</div>
            <div className="col" onClick={() => input('6')}>6</div>
            <div className="col" onClick={() => input('9')}>9</div>
            <div className="col" onClick={calculate}>=</div>
            </div>
            <div className="row">
            <div className="col" onClick={() => input('+')}>+</div>
            <div className="col" onClick={() => input('-')}>-</div>
            <div className="col" onClick={() => input('*')}>*</div>
            <div className="col" onClick={() => input('/')}>/</div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Calculator;
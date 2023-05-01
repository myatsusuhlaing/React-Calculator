import React, { useState,useEffect } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function Calculator(){
const [expression,setExpression] = useState('');
const [isNumLockOn, setIsNumLockOn] = useState(true);

    const input = (value) => {
        let newExpression;
        if (value === "=") {
        const answer = evaluate(expression);
        newExpression = answer.toString();
        } else {
        newExpression = expression + (isNumLockOn ? value : getAlternativeSymbol(value));
        }
        setExpression(newExpression);
    };
  
    const getAlternativeSymbol = (value) => {
    switch (value) {
        case "1":
        return "!";
        case "2":
        return "@";
        default:
        return value;
        }
    };

    const toggleNumLock = () => {
        setIsNumLockOn(!isNumLockOn);
    };

    const clear = () => {
        setExpression("");
      };

// const input = (value) => {
//     const newExpression = expression + value;
//     setExpression(newExpression);
// };


// const blank = () =>{
//     setExpression('');  //clear previous data
// };

    const calculate = () => {
        const answer = evaluate(expression);
        const newExpression = expression + '\n' + answer ; 
        setExpression(newExpression);
    }
    const handleKeyDown = (event) => {
        const key = event.key;
        if (/^[0-9]$/.test(key)) {
        input(key);
        } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        input(key);
        } else if (key === "Enter") {
        calculate();
        } else if (key === "Backspace") {
        setExpression(expression.slice(0, -1));
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
        window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return(
        <>
        <div className="calculator">
        <div className="input">
            <div className="row">
            <textarea 
            id="inputArea" 
            value={expression} 
            cols="30" 
            rows="10"
            />
            </div>
        </div>
        <div className="button">
            <div className="row">
            <div className="col" onClick={() => input('1')}>{isNumLockOn ? "1" : "!"}</div>
            <div className="col" onClick={() => input('4')}>{isNumLockOn ? "4" : "$"}</div>
            <div className="col" onClick={() => input('7')}>{isNumLockOn ? "7" : "&"}</div>
            <div className="col" onClick={clear}>c</div>
            </div>
            <div className="row">
            <div className="col" onClick={() => input('2')}>{isNumLockOn ? "2" : "@"}</div>
            <div className="col" onClick={() => input('5')}>{isNumLockOn ? "5" : "%"}</div>
            <div className="col" onClick={() => input('8')}>{isNumLockOn ? "8" : "*"}</div>
            <div className="col" onClick={() => input('0')}>{isNumLockOn ? "0" : ")"}</div>
            </div>
            <div className="row">
            <div className="col" onClick={() => input('3')}>{isNumLockOn ? "3" : "#"}</div>
            <div className="col" onClick={() => input('6')}>{isNumLockOn ? "6" : "^"}</div>
            <div className="col" onClick={() => input('9')}>{isNumLockOn ? "9" : "("}</div>
            <div className="col" onClick={calculate}>{isNumLockOn ? "=" : "+"}</div>
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
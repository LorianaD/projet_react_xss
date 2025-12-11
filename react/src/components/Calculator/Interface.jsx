import { useState } from "react"

function Interface() {
    const [display, setDisplay] = useState('0');
    // const [nbr, setNbr] = useState();
    // const [operator, setOperator] = useState();
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);

    const inputDigit = (digit) => {

        setDisplay((prevDisplay) =>
            prevDisplay === "0" ? String(digit) : prevDisplay + digit
        );

    };

    const inputDecimal = () => {

        setDisplay((prevDisplay) => {
            if (!prevDisplay.includes(".")) {
                return prevDisplay + ".";
            }
            return prevDisplay;
        });

    };

    const calculate = (first, second, op) => {

        if (op === "+") {
            return first + second;
        }

        if (op === "-") {
            return first - second;
        }

        if (op === "*") {
            return first * second;
        }

        if (op === "/") {
            if (second === 0) {

                return first;
            }
            return first / second;
        }

        return second;

    };

    const handleOperator = (nextOperator) => {

        const currentValue = parseFloat(display);

        if (firstOperand === null) {
            
            setFirstOperand(currentValue);

        } else if (operator !== null) {
            
            const result = calculate(firstOperand, currentValue, operator);
            setFirstOperand(result);
            setDisplay(String(result));

        }

        setOperator(nextOperator);

        setDisplay("0");
    };

    const handleEqual = () => {

        if (firstOperand === null || operator === null) {
            // Rien à calculer
            return;
        }

        const secondValue = parseFloat(display);
        const result = calculate(firstOperand, secondValue, operator);

        setDisplay(String(result));
        setFirstOperand(null);
        setOperator(null);

    };

    const clear = () => {

        setDisplay('0');
        setFirstOperand(null);
        setOperator(null);

    };


    return(
        <div>
            <div className="calculator-interface">
                {/* Affichage */}
                <div id="display">
                    { display }
                </div>

                {/* Pad numérique */}
                <div id="pad">
                    <div className="container-btns">
                        <button className="btn"></button>
                        <button className="btn" onClick={() => handleOperator('/')} >÷</button>
                        <button className="btn" onClick={() => handleOperator('*')} >x</button>
                        <button className="btn btn-C" onClick={clear}>C</button>

                        <button className="btn" onClick={() => inputDigit(7)}>7</button>
                        <button className="btn" onClick={() => inputDigit(8)}>8</button>
                        <button className="btn" onClick={() => inputDigit(9)}>9</button>
                        <button className="btn" onClick={() => handleOperator('-')}>-</button>

                        <button className="btn" onClick={() => inputDigit(4)}>4</button>
                        <button className="btn" onClick={() => inputDigit(5)}>5</button>
                        <button className="btn" onClick={() => inputDigit(6)}>6</button>
                        <button className="btn" onClick={() => handleOperator('+')}>+</button> 

                        <button className="btn" onClick={() => inputDigit(1)}>1</button>
                        <button className="btn" onClick={() => inputDigit(2)}>2</button>
                        <button className="btn" onClick={() => inputDigit(3)}>3</button>
                        <button className="btn-enter" onClick={handleEqual}>=</button>                        

                        <button className="btnZero" onClick={() => inputDigit(0)}>0</button>
                        <button className="btn" onClick={inputDecimal}>,</button>
                    </div>
                </div>                
            </div>
            
        </div>

    )
}

export default Interface
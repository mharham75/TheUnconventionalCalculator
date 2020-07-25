const defualtResult = 0;

let currentResult = defualtResult;

let assumeArray = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc, calcNumber){
    const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber ;
    createAndWriteOutput('+', initialResult, enteredNumber);
    assumeArray.push(enteredNumber);
    console.log(assumeArray[0]);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber ;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber ;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber ;
    createAndWriteOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


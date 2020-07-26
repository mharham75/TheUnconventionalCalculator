const defualtResult = 0;

let currentResult = defualtResult;

let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator,resultBeforeCalc, calcNumber){
    const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDescription);
}

function writeToLog(opertaion,previousResult,number,result)
{
    logEntry = {
        opertaion: opertaion,
        previosResult: previousResult ,
        number: number,
        result: result 
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber ;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('Add',initialResult,enteredNumber,currentResult);
    
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber ;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('Subtract',initialResult,enteredNumber,currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber ;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('Product',initialResult,enteredNumber,currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber ;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('Division',initialResult,enteredNumber,currentResult);
}


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


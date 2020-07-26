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

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'Add')
    {
        currentResult = currentResult + enteredNumber ;
        mathOperator = '+' ;
    }

    else if(calculationType === 'Subtract')
    {
        currentResult -= enteredNumber ;  
        mathOperator = '-' ;
    }

    else if(calculationType === 'Multiply')
    {
        currentResult *= enteredNumber ;  
        mathOperator = '*' ;
    }

    else
    {
        currentResult /= enteredNumber ;  
        mathOperator = '/' ;
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);
}

function add() {
    calculateResult('Add');
}

function subtract() {
    calculateResult('Subtract');
}

function multiply() {
    calculateResult('Multiply');
}

function divide() {
    calculateResult('Divide');
}


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function appendValue(val){
    document.getElementById('display').value += val;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function calculateResult(){
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
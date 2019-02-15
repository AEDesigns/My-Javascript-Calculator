var a = [];
var b = [];
var c = [];
var operator = [];
var input = [];

function calculatorOperations(a, b, operator){
  if(typeof a !== 'number' || typeof b !== "number"){
         return 'error, must enter a number';
        } 
       switch(operator){
        case '+':
        return a + b;
        case '-':
        return a - b;
        case '*':
        return a * b;
        case '/':
        return a / b;
  }
}

let numField1 = document.getElementById('numField1');
let numField2 = document.getElementById('numField2');
let resultField = document.getElementById('resultField');
let form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event){
    if(!numField1.value || !numField2.value){
        alert('Please Enter a Value');
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var result = x / y;
        var percent = result * 100;
        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
})




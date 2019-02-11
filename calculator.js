var a = [];
var b = [];
var c = [];
var operator = []

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

document.addEventListener('click', function(e){
   a.push(parseInt(e.target.id));
})
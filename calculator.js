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
    if (!resultField.innerText.value) {
        alert('Please Enter a Valid Value');
    }
})



var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eightBtn = document.getElementById('calc-eight');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');

var decimalBtn = document.getElementById('calc-decimal');
var clrBtn = document.getElementById('calc-clear');
var bkspcBtn = document.getElementById('calc-backspace');
var displayvalElement = document.getElementById('calc-display-val');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

var calcNumbtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-operator');

var updateDisplayVal = (onclick) => {
    var btnText = onclick.target.innerText;
    if (displayVal === '0') {
        displayVal = '';
    }
    displayVal += btnText;
    displayvalElement.innerText = displayVal;
    console.log('it works')
};

for (let i = 0; i < calcNumbtns.length; i++) {
    calcNumbtns[i].addEventListener('click', updateDisplayVal, false);
}

//for (let i = 0; i < calcOperatorBtns.length; i++) {
//  calcOperatorBtns[i],addEventListener('click', performOperation, false);  
//}
const valueA = [];
const valueB = [];
const valueD = [];
//document.addEventListener('click', function(e){
//    valueA.push(parseInt(e.target.id));
//    document.getElementById('calc-window').innerHTML = valueA.join('');
//});
//
//document.addEventListener('click', function(b){
//    valueB.push(parseINT(b.target.id));
//    document.getElementById('calc-window').innerHTML = valueB.join('');
//})
//
//document.addEventListener('click',function(c){
//    valueD.push(c.target.id);
//    document.getElementById('calc-window').innerHTML = valueD.join(valueA + valueB)
//})

//function addNums(valueA, valueB){
//  if (valueA === NaN || valueB === NaN){
//  valueC = valueC.parseInt(valueA+valueB);
//  document.getElementById('calc-window').innerHTML = valueC;
//}
//}
//
//if (valueA === NaN || valueB === NaN)function addition(valueA, valueB){
//  document.getElementById('add').innerHTML = '+';
//  valueC = valueA + valueB;
//  document.getElementById('calc-window').innerHTML = valueC.join('');
//}

if (valueA === []){
    document.addEventListener('click', function(e){
    valueA.push(parseInt(e.target.id));
    document.getElementById('calc-window').innerHTML = valueA.join('');
})
} else if (valueB === []){
    document.addEventListener('click', function(b){
    valueB.push(parseInt(b.target.id));
    document.getElementById('calc-window').innerHTML = valueB.join('');
})
} else {
   document.addEventListener('click',function(c){
    valueD.push(c.target.id);
    document.getElementById('calc-window').innerHTML = valueD.join(valueA + valueB)
}) 
};
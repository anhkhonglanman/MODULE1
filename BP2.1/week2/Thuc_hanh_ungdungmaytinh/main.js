function Add() {
    let x = Number(document.getElementById('number1').value);
    let y = Number(document.getElementById('number2').value);
    let result = (x + y);

    document.getElementById('result').innerHTML = result;

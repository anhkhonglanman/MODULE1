// let inputWidth;
// let inputHeight;
//
// inputWidth = prompt('Enter the width');
// inputHeight = prompt('Enter the height');
//
// let width = parseInt(inputWidth);
// let height = parseInt(inputHeight);
// let area = width * height ;
//
// document.write('This area is : ' + area);

function Diem() {
    let x = Number(document.getElementById('Diem1').value);
    let y = Number(document.getElementById('Diem2').value);
    let z = Number(document.getElementById('Diem3').value);
    let result = ((x + y + z) / 3);

    document.getElementById('result').value = result;
}
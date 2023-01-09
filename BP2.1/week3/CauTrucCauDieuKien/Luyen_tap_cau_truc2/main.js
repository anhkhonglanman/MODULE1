// function cToF(celsius) {
//     var cTemp = celsius;
//     var cToFahr = cTemp * 9 / 5 + 32;
//     var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     document.write(message);
// }

// function fToC(fahrenheit) {
//     var fTemp = fahrenheit;
//     var fToCel = (fTemp - 32) * 5 / 9;
//     var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     document.write(message);
// }
// cToF(60);
// fToC(45);

// let met = prompt('',);
// let ft = met * 3.2808;
//
// document.write(ft)

// let a = prompt('number',);
// let dientich = (a ** 2);
// document.write(dientich)

// let root1,root2 ;
//
// let a = prompt('Enter the first number',);
// let b = prompt('Enter the second number',);
// let c = prompt('Enter the third number',);
//
// let delta = b * b - 4 * a * c;
//
// if (delta > 0) {
//     root1 = (-b + Math.sqrt(delta)) / (2 * a);
//     root2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`${root1} ${root2}`);
// } else if (delta === 0) {
//     root1 = root2 = -b / (2 * a);
//     console.log(`${root1} ${root2}`);
// } else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-delta) / (2 * a)).toFixed(2);
//
//     // result
//     console.log(
//         `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
//     );
// }

let a = prompt('');
let b = prompt('');
let c = prompt('');

let d = function () {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && b + c > a && a + c > b) {
            alert ('canh cua 1 tam giac')
        } else {
            alert ('ko phai canh cua 1 tam giac');
        }
    }
}
d()
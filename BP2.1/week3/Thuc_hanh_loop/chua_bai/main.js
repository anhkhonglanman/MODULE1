
// bang cuu chuong
// let str = '<table border="1px">'
// for (let i= 1; i<=10; i++) {
//     str += '<tr>'
//     for (let j =1; j<= 10; j++){
//         str += `<td> ${i} x ${j} = ${i * j} </td>`
//     }
//     str+='</tr>'
// }
// str += '</table>' + '<br>'
// document.write(str)

// fibinacci
//  let a = 0;
//  let b = 1;
//  let tong = 0;
//
//  for (let i = 0; i <= 5; i++){
//   document.write(a + '<br>');
//   tong = a + b;
//   a = b;
//   b = tong;
//  }

// SNT
function checkSNT(number) {
 let demsouoc = 0;
 if (number < 2) {
  return false
 }
 for (let i = 1 ; i <= number; i++) {
  if(number % i === 0) {
   demsouoc++
  }
 }
 if (demsouoc === 2) {
  return true
 }
}
let number = +prompt('nhap so');
let count = 0;
for (let i = 2; count < number; i++) {
 if(checkSNT(i)) {
   count++;
   document.write(`So nguyen to thu ${count} la ${i} <br>`)
 }
}


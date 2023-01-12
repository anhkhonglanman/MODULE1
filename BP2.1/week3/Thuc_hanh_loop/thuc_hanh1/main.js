// i = 1
// for (;i < 100; i++) {
//     if (i === 99) {
//         alert('hoan thanh');
//         break;
//     }
//     console.log(i)
// }

// let nhietdo = prompt('nhap so');
// let num = true;
// for (i = 0; i < num; i++) {
//     if (i >20 && i<100) {
//         nhietdo = true;
//         break;
//     } else {
//         nhietdo = false;
//         alert('chinh lai nhiet do');
//         break;
//     }
// }

const number = parseInt(prompt("Enter a number"));
let n1 = 1;
let n2 = 1;
let nextTerm ;
console.log('Fibonacci');
console.log(n1);
console.log(n2);
let sum = 0;
nextTerm = n1 + n2;

while (nextTerm <= number) {
    console.log(nextTerm);
    sum += nextTerm;
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
console.log("tong la:" + sum)


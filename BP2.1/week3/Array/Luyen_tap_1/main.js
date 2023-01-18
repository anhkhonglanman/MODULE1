let num = [1, 20, 3, 40, 5, 60, 7, 80, 9, 10];
// for (let x = 1; x < num.length; x++) {
//     if ( num[x] > 10) {
//         console.log(num[x])
//     }
// }

// Tim max

// let max = num[0];
// let max_index= 0;
//
// for ( let i = 0; i <= num.length; i ++) {
//     if (max < num[i]) {
//         max = num[i];
//         max_index = i;
//     }
// }
// console.log("max",max)
// console.log("max_index", max_index)

// tinh trung binh

// let sum=0;
// for (const i of num) {
//     sum += i;
// }
//
// const avg = sum / num.length;
//
// console.log(avg)

// Dao nguoc

// console.log(num.reverse())

// Nhap so nguyen V

// let giatri = 5;

// for (let i = 0;i <= num.length; i++) {
//     if (num[i] === giatri) {
//         alert("5 is in arr")
//     } else {
//         alert("not in arr")
//     }
// }

// let giatri = 10;
//
// for (let i = 0; i < num.length; i++) {
//     if (num[i] === giatri) {
//         num.splice(i,1,0)
//     }
// }
// console.log(num)

// giam dan

num.sort(function (a, b) {
    return b - a;
})

console.log(num)

hiển thị C


// hien thi mang

// let x = 0;
// let array = Array();
// function add_element_to_array() {
//     array[x] =document.getElementById('txtValue').value;
//     alert('Element: ' + array[x] + 'Added at index' + x);
//     x++;
//     document.getElementById('txtValue').value = '';
// }
// function display_array() {
//     let e = '<hr/>';
//     for (let i = 0; i < array.length; i ++) {
//         e += 'element ' + i + '=' + array[i] + '<br/>';
//     }
//     document.getElementById('result').innerHTML = e;
// }


let x = [-3, 5, 1, 2, 10];

// dao nguoc phan tu mang


// let first = 0;
// let last = x.length -1;
// while (first < last) {
//     let b = x[first];
//     x[first] = x[last];
//     x[last] = b;
//     first++;
//     last--;
//
// }
// document.write(x)

// document.write(x.reverse())

// print value array

// let value = prompt("Enter a number",)
//
// for (let i = 0; i< x.length; i ++) {
//     if (value == x[i]) {
//         alert ("value" + x[i] + "found at" + i);
//     }
// }

let max = x[0];
let index = 0;

for (i = 0; i < x.length; i ++) {
    if (max < x[i]) {
        max = x[i];
        index = i;
    }
}
console.log("max: " + max + " at position " + index);
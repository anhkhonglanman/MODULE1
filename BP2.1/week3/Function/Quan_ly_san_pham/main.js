
let product = ['Iphone', 'Samsung', 'Xiaomi', 'Nokia'];
function Add() {
    let newProduct = document.getElementById("new").value;
    product.push(newProduct);
    document.getElementById("new").value = '';
    displayAdd()
}
function displayAdd () {
    let data = "<table>"
    data += "<tr>";
    data += "<th colspan='2'> Product name </th>";
    data += "<th>" + product.length + "products</th>";
    data += "</tr>";
    for (let i = 0; i < product.length; i++) {
        data += "<tr>";
        data += "<td width='60%'>" + product[i] +"</td>"
        data += "<td> <button onclick='edit('" + i + ")'>Edit</button></td>";
        data += "<td> <button onclick='del('" + i + ")'>Delete</button></td>";
        data += "</tr>";
    }
    data += "</table>"
    document.getElementById('ds').innerHTML = data;
}

function edit(i) {
    let newData = prompt('input new data');
    product[i] = newData;
    displayAdd()
}

function del(i) {
    product.slice(i,1)
    displayAdd()
}







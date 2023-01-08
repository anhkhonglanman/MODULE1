var selectedElement = document.getElementById("mySelect");
selectedElement.addEventListener("change",changeFunction);
function changeFunction() {
    var selectValue = document.getElementById("mySelect").value;
    alert(selectValue);
}

var demo = document.getElementById("demo");
demo.addEventListener("mouseover",mouseover);
demo.addEventListener("mouseout", mouseout);

function mouseover() {
    document.getElementById("demo").style.color = "red";
}
function mouseout() {
    document.getElementById("demo").style.color = "black";
}

var demo_1 = document.getElementById("demo1");
demo_1.addEventListener("click", clickFunction);
function clickFunction() {
    alert('Xin chao');
}
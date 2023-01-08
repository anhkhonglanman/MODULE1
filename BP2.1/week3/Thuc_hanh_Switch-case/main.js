var opera = "+";
var a = 6;
var b = 3;
switch (opera)
{
    case "+":
        alert("a + b=" + (a + b));
        break;
    case "-":
        alert("a - b=" + (a - b));
        break;
    case "*":
        alert("a * b=" + (a * b));
        break;
    case "/":
        alert("a / b=" + (a / b));
        break;
    default:
        alert("Khong co phep toan");
        break;
}

var c = 100;
var d = 200;

switch(c) {
    case 100:
        alert("c=" + c);
        switch(d) {
            case 200:
                alert("d=" + d);
        }
}
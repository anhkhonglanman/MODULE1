let sout;
sout = "<table border = '1' width='100%'  cellspacing = '0' cellpadding = '15'>"
for (i = 2; i <= 9; i++) {
    sout = sout + "<tr>";
    for (j = 1; j <= 10; j++) {
        sout = sout + "<td>" + i + " x " + j + " = " + (i * j) + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);
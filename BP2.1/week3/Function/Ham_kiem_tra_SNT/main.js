function SNT(n) {
    n = document.getElementById("nhapSNT").value;
    // biến cờ hiệu
    var flag = true;

    // nếu n < 2 tức không phải SNT
    if (n < 2) {
        flag = flase;
    } else {
        // lặp từ 2 tới n -1
        for (var i = 2; i < n - 1; i++) {
            if (n % i === 0) {
                flag = false;
                break;
            }
        }
    }
    // kiểm tra biến
    if (flag == true) {
        document.getElementById("result").innerHTML = n + " là số nguyên tố" + "<br/>";
    } else {
        document.getElementById("result").innerHTML = n + " khong là số nguyên tố" + "<br/>";
    }
}




var curDate = new Date();

// Lấy giờ hiện tại
var time = curDate.getHours();
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);


//Phương thức getDay() trả về ngày trong tuần dưới dạng một số nằm giữa 0 và 6. (Chủ nhật = 0, Thứ hai = 1, Thứ ba = 2, v.v)
//
// Sử dụng các con số chỉ ngày trong tuần để tính toán ra tên thường gọi:

switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
}
document.write(day);

switch (new Date().getDay()) {
    case 6:
        text = " To day is Saturday";
        break;
    case 0:
        text = " To day is Sunday";
        break;
    default :
        text = " Looking forward to the weekend";
}
document.write(text);

switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    default :
        text = " Looking forward to the weekend";
        break;
    case 4:
    case 5:
        text = " Soon it is weekend";
        break;
    case 0:
    case 6:
        text = " It is weekend";
}
document.write(text);
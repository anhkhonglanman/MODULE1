function kiem_tra() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let Bmi = weight / ( height ^ 2 );
    let result = '';

    if (Bmi < 18) {
        result = 'Underweight'
    }
    else if (Bmi < 25) {
        result = 'Normal'
    }
    else if (Bmi < 30) {
        result = 'Overweight'
    }
    else {
        result = 'Obese'
    }
    document.getElementById("result").innerHTML = "Chi si BMI :" + Bmi +''+result ;
}

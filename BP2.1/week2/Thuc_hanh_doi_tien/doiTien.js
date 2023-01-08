function change() {
    let Amount = document.getElementById('Amount').value;
    let From = document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let result;

    if (From === 'USD' && To === 'VND') {
        result = 'result :' + (Amount * 23000) + 'vnd';
    } else if (From === 'USD' && To === 'USD') {
        result = 'result :'+ (Amount) + '$';
    } else if (From === 'VND' && To === 'USD') {
        result = 'result :' + (Amount / 23000) + '$';
    } else {
        result = 'result :'+ (Amount) + 'vnd';
    }
    document.getElementById('result').innerHTML = result;

}
let arr1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega'
            , 'Altair', 'Dubhe', 'Regulus'];
let ar2 = ['Ursa Minor', 'Tarurus', 'Cygnus',
            'Lyra', 'Aquila', 'Ursa','Major', 'leo'];

function checkStar(arr) {
    let index_arr = 0;
    let result = "" ;
    for (let i = 0; i <= arr1.length; i ++) {
        if (arr === arr1[i]) {
            index_arr = i;
            for (let j = 0; j <= arr2.length; j++) {
                if(index_arr === arr2[j]) {
                    result = arr2[j];
                    return result;
                } else {
                    result = "khong tim thay chom sao";
                    return result;
                }
            }
        } else {
            result = "khong tim thay sao";
            return result
        }
    }
}
// console.log(checkStar())
document.write(checkStar())
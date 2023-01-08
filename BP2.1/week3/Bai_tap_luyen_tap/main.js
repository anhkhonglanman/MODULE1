
// let value = prompt('What is the "official" name 0f Javascript','');
// if (value == 'ECMAScript') {
//     alert( ' Right!' );
// } else {
//     alert( ' Didn’t know? ECMAScript!' );
// }

let userName = prompt("who's there?",'');
if (userName == 'Admin') {
    let pass = prompt('Password?','');
    if (pass == 'ThemMaster') {
        alert('Welcome!');
    } else if (pass == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if ( userName == null) {
    alert('Canceled');
} else  {
    alert("I don't know who you");
}



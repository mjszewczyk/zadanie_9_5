window.onload = function () {
    var buttons = document.getElementsByClassName('button');
    alert('Liczba przycisków: ' + buttons.length);
    for (var i = 0; i < buttons.length; i++) {
        var but = buttons[i];
        alert('Przycisk ' + i + ': ' + but.innerText + '\n' + but.className);
        //    if (i % 2 == 0) {
        //        but.className += ' hot';
        //    }
        //    else {
        //        but.className += ' cold';
        //    }
        //    console.log(but.className);
    }
}
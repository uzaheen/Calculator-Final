var inputLabel = document.getElementById('inputLabel');

function puschBtn(obj) {
    var puched = obj.innerHTML;
    if (puched == '=') {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
        
    }else if (puched == 'AC') {
        inputLabel.innerHTML = '0';
        

    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = puched;
        } else {
            inputLabel.innerHTML += puched;
        }
    }
}
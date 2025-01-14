'use strict'
var TextToKeep;

function textAct(action) {
    let text = document.getElementById("text-alter-sample").value;
    document.getElementById("text-alter-restore").disabled = false;
    switch (action) {
        case 0:
            text = "";
            break;
        case 1:
            text = text.toLowerCase();
            break;
        case 2:
            text = text.toUpperCase();
            break;
        case 3:
            return; // TODO
            break;
        default:
            document.getElementById("text-alter-sample").value = TextToKeep;
            document.getElementById("text-alter-restore").disabled = true;
            return;
            break;
        }
    document.getElementById("text-alter-sample").value = text;
    TextToKeep = text;
}
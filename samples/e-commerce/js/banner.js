'use strict'
function bannerMessage(message) {
    document.getElementById("message").style.display = "inline";
    if (message == 0) {
        document.getElementById("message").style.display = "none";
        return;
    }
    else if (message == 1) document.getElementById("message").textContent = "Get a laptop that will execute daily tasks with ease.";
    else if (message == 2) document.getElementById("message").textContent = "Get a laptop that will run any game with ease.";
}
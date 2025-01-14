'use strict'
document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
        window.open("./index.html", "_self")   
    }
});
console.log("toolsetTheme.js loaded");
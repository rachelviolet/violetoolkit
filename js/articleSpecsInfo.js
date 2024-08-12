var font;
var theme;
var vw;
var vh;
var difference;

function setView() {
    fontSet();
    themeSet();
}

document.addEventListener('keypress', function(event) {
    if (event.key == '0') {
    window.open("./index.html", "_self")   
    }
    if (event.key == '1') {
    window.open("#back", "_self")   
    }
    if (event.key == 'a') {
    window.open("#android", "_self")   
    }
    if (event.key == 'i') {
    window.open("#ios", "_self")   
    }
    if (event.key == 'w') {
    window.open("#windows", "_self")   
    }
    if (event.key == 'l') {
    window.open("#linux", "_self")   
    }
    if (event.key == 'm') {
    window.open("#macos", "_self")   
    }
    if (event.key == 'f') {
    window.open("#final", "_self")   
    }
});

console.log("main.js loaded");
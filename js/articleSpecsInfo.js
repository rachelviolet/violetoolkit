var font;
var theme;
var vw;
var vh;
var difference;

function setView() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    difference = Math.abs(vh - vw);
    fontSet();
    themeSet();
}

function fontSet() {
    console.log(localStorage.getItem("violetool-retro-font"))
    console.log(font == "OpenSans")
    if (localStorage.getItem("violetool-retro-font") == "1") font = "VT323";
    else font = "OpenSans";
    console.log(font == "OpenSans")
    if (font == "OpenSans"){
        for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
            document.body.getElementsByTagName("*")[i].style.fontSize = "14px";
            document.body.getElementsByTagName("*")[i].style.fontFamily = font;
        }
        for(var i = 0; i < document.body.getElementsByTagName("h1").length; i++) {
            document.body.getElementsByTagName("h1")[i].style.fontSize = "18px";
            document.body.getElementsByTagName("h1")[i].style.fontFamily = font;
        }
    }
    else {
        for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
            document.body.getElementsByTagName("*")[i].style.fontSize = "17.5px";
            document.body.getElementsByTagName("*")[i].style.fontFamily = font;
        }
        for(var i = 0; i < document.body.getElementsByTagName("h1").length; i++) {
            document.body.getElementsByTagName("h1")[i].style.fontSize = "21.5px";
            document.body.getElementsByTagName("h1")[i].style.fontFamily = font;
        }
    }
}

function themeSet() {
theme = localStorage.getItem("violetool-theme");
switch (theme) {
    case "0":
    default:
        document.body.style.backgroundColor = "#fafafa";
        for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
            document.body.getElementsByTagName("*")[i].style.color = "#101010";
        }
        break;
    case "1":
        document.body.style.backgroundColor = "#101010";
        for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
            document.body.getElementsByTagName("*")[i].style.color = "#fafafa";
        }
        break;
    case "2":
        document.body.style.backgroundColor = "#101010";
        for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
            document.body.getElementsByTagName("*")[i].style.color = "#cf9fff";
        }
        break;
}
}

setInterval("setView()", 500)

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
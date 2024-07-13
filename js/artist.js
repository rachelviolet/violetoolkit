'use strict'
var vw;
var vh;
var difference
var deviceRAMSpeed;

function setView() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    difference = Math.abs(vh - vw);
    drawApp();
}

function drawApp() {
    // Shortcut highlighting.
    fontSet();
    if (preinput == 0) {
        document.getElementById("short-a").style.color = themeDisabledColor;
        document.getElementById("short-b").style.color = themeDisabledColor;
        document.getElementById("short-c").style.color = themeDisabledColor;
    }
    else if (preinput == 1) {
        document.getElementById("short-a").style.color = themeEnabledColor;
        document.getElementById("short-b").style.color = themeDisabledColor;
        document.getElementById("short-c").style.color = themeDisabledColor;
    }
    else if (preinput == 2) {
        document.getElementById("short-a").style.color = themeDisabledColor;
        document.getElementById("short-b").style.color = themeEnabledColor;
        document.getElementById("short-c").style.color = themeDisabledColor;
    }

    if (font == "OpenSans"){
        for(var i = 0; i < document.body.getElementsByTagName("p").length; i++) {
            document.body.getElementsByTagName("p")[i].style.fontSize = "14px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("a").length; i++) {
            document.body.getElementsByTagName("a")[i].style.fontSize = "14px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("button").length; i++) {
            document.body.getElementsByTagName("button")[i].style.fontSize = "14px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h1").length; i++) {
            document.body.getElementsByTagName("h1")[i].style.fontSize = "18px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h3").length; i++) {
            document.body.getElementsByTagName("h3")[i].style.fontSize = "16px";
        }
        document.getElementById("titlev").style.fontSize = "10px";
    }
    else {
        for(var i = 0; i < document.body.getElementsByTagName("p").length; i++) {
            document.body.getElementsByTagName("p")[i].style.fontSize = "17.5px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("a").length; i++) {
            document.body.getElementsByTagName("a")[i].style.fontSize = "17.5px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("button").length; i++) {
            document.body.getElementsByTagName("button")[i].style.fontSize = "17.5px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h1").length; i++) {
            document.body.getElementsByTagName("h1")[i].style.fontSize = "21.5px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h3").length; i++) {
            document.body.getElementsByTagName("h3")[i].style.fontSize = "18px";
        }
        document.getElementById("titlev").style.fontSize = "12px";
    }

    // if (debugMode) document.getElementById("screen").style.border = "2px black solid";
}

function fontSet(change) {
    if (change) {
        if (font == "VT323") localStorage.setItem("violetool-retro-font", 0);
        else if (font == "OpenSans") localStorage.setItem("violetool-retro-font", 1);
        else console.warn("Font not found.");
    }
    if (localStorage.getItem("violetool-retro-font") == 1) font = "VT323";
    else font = "OpenSans"
    for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
        document.body.getElementsByTagName("*")[i].style.fontFamily = font;
        // if (difference > 260 && vh > vw) document.body.getElementsByTagName("*")[i].style.fontSize = `${percenter("x", 3)}px`;
        // else document.body.getElementsByTagName("*")[i].style.fontSize = `${percenter("x", 2)}px`;
    }
}

function themeSet(change) {
    if (change) {
        if (theme == 0) localStorage.setItem("violetool-theme", 1);
        else if (theme == 1) localStorage.setItem("violetool-theme", 2);
        else if (theme == 2) localStorage.setItem("violetool-theme", 0);
        else console.warn("Theme not found.");
    }
    theme = localStorage.getItem("violetool-theme");
    switch (theme) {
        case "0":
        default:
            document.body.style.backgroundColor = "#fafafa";
            for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
                document.body.getElementsByTagName("*")[i].style.color = "#101010";
            }
            themeDisabledColor = "#101010";
            themeEnabledColor = "#5C00A3";
            break;
        case "1":
            document.body.style.backgroundColor = "#101010";
            for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
                document.body.getElementsByTagName("*")[i].style.color = "#fafafa";
            }
            themeDisabledColor = "#fafafa";
            themeEnabledColor = "#5C00A3";
            break;
        case "2":
            document.body.style.backgroundColor = "#101010";
            for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
                document.body.getElementsByTagName("*")[i].style.color = "#cf9fff";
            }
            themeDisabledColor = "#CF9FFF";
            themeEnabledColor = "#ead4ff";
            break;
    }
}

// Frequency of artist call.
if (navigator.deviceMemory < 4) deviceRAMSpeed = 2000;
else if (navigator.deviceMemory < 8) deviceRAMSpeed = 500;
else deviceRAMSpeed = 250;
if (!freezeMode) {const drawingGame = setInterval(setView, deviceRAMSpeed);}
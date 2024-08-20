'use strict'

function setView() {
    drawApp();
}

function drawApp() {
    // Shortcut highlighting.
    fontSet();

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
    }
}

function themeSet(change) {
    if (change) {
        if (theme == 0) {
            localStorage.setItem("violetool-theme", 1);
        }
        else if (theme == 1) {
            localStorage.setItem("violetool-theme", 2);
        }
        else if (theme == 2) localStorage.setItem("violetool-theme", 0);
        else console.warn("Custom theme detected.");
    }
    themePreset();
    document.body.style.backgroundColor = bodyColor;
    for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
        document.body.getElementsByTagName("*")[i].style.color = fontColor;
    }
    for(var i = 0; i < document.body.getElementsByTagName("textarea").length; i++) {
        document.body.getElementsByTagName("textarea")[i].style.backgroundColor = backgroundColor;
        document.body.getElementsByTagName("textarea")[i].style.color = fontColor;
    }
    for(var i = 0; i < document.body.getElementsByTagName("input").length; i++) {
        document.body.getElementsByTagName("input")[i].style.backgroundColor = backgroundColor;
        document.body.getElementsByTagName("input")[i].style.color = fontColor;
    }
}

console.log("artist.js loaded");
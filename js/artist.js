'use strict'
function setView() {
    drawApp();
}

function drawApp() {
    // Shortcut highlighting.

    if (Page.font == "OpenSans" || Page.font == "RobotoMono") {
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
            document.body.getElementsByTagName("h1")[i].style.fontSize = "26px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h2").length; i++) {
            document.body.getElementsByTagName("h2")[i].style.fontSize = "20px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h3").length; i++) {
            document.body.getElementsByTagName("h3")[i].style.fontSize = "16px";
        }
        document.getElementById("titlev").style.fontSize = "10px";
    }
    else {
        for(var i = 0; i < document.body.getElementsByTagName("p").length; i++) {
            document.body.getElementsByTagName("p")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("a").length; i++) {
            document.body.getElementsByTagName("a")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("li").length; i++) {
            document.body.getElementsByTagName("li")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("button").length; i++) {
            document.body.getElementsByTagName("button")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h1").length; i++) {
            document.body.getElementsByTagName("h1")[i].style.fontSize = "30px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h2").length; i++) {
            document.body.getElementsByTagName("h2")[i].style.fontSize = "28px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h3").length; i++) {
            document.body.getElementsByTagName("h3")[i].style.fontSize = "24px";
        }
        document.getElementById("titlev").style.fontSize = "14px";
    }
    if (Page.font == "RobotoMono") {
        
    }
}

function fontSet(change) {
    if (change) {
        if (Page.font == "VT323") localStorage.setItem("violetool-retro-font", 2);
        else if (Page.font == "OpenSans") localStorage.setItem("violetool-retro-font", 1);
        else if (Page.font == "RobotoMono") localStorage.setItem("violetool-retro-font", 0);
        else console.warn("Font not found.");
    }
    if (localStorage.getItem("violetool-retro-font") == 1) Page.font = "VT323";
    else if (localStorage.getItem("violetool-retro-font") == 2) Page.font = "RobotoMono";
    else Page.font = "OpenSans"
    for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
        document.body.getElementsByTagName("*")[i].style.fontFamily = Page.font;
    }
    drawApp();
}

function themeSet(change) {
    if (change) {
        if (Page.theme == 0) {
            localStorage.setItem("violetool-theme", 1);
        }
        else if (Page.theme == 1) {
            localStorage.setItem("violetool-theme", 2);
        }
        else if (Page.theme == 2) localStorage.setItem("violetool-theme", 0);
        else console.warn("Custom theme detected.");
    }
    themePreset();
    document.body.style.backgroundColor = Page.bodyColor;
    for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
        document.body.getElementsByTagName("*")[i].style.color = Page.fontColor;
    }
    for(var i = 0; i < document.body.getElementsByTagName("textarea").length; i++) {
        document.body.getElementsByTagName("textarea")[i].style.backgroundColor = Page.backgroundColor;
        document.body.getElementsByTagName("textarea")[i].style.color = Page.fontColor;
    }
    for(var i = 0; i < document.body.getElementsByTagName("input").length; i++) {
        document.body.getElementsByTagName("input")[i].style.backgroundColor = Page.backgroundColor;
        document.body.getElementsByTagName("input")[i].style.color = Page.fontColor;
    }
}

console.log("artist.js loaded");
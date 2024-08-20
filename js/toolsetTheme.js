'use strict'
function fontSet() { // Different from artist.js
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
    console.log("Setting theme");
    theme = localStorage.getItem("violetool-theme");
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

console.log("toolsetTheme.js loaded");
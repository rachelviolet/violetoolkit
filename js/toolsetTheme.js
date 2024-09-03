'use strict'
function fontSet() { // Different from artist.js
    if (localStorage.getItem("violetool-retro-font") == "1") Page.font = "VT323";
    else Page.font = "OpenSans";
    if (Page.font == "OpenSans"){
        for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
            document.body.getElementsByTagName("*")[i].style.fontSize = "14px";
            document.body.getElementsByTagName("*")[i].style.fontFamily = Page.font;
        }
        for(var i = 0; i < document.body.getElementsByTagName("h1").length; i++) {
            document.body.getElementsByTagName("h1")[i].style.fontSize = "26px";
            document.body.getElementsByTagName("h1")[i].style.fontFamily = Page.font;
        }
    }
    else {
        for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
            document.body.getElementsByTagName("*")[i].style.fontSize = "17.5px";
            document.body.getElementsByTagName("*")[i].style.fontFamily = Page.font;
        }
        for(var i = 0; i < document.body.getElementsByTagName("h1").length; i++) {
            document.body.getElementsByTagName("h1")[i].style.fontSize = "28.5px";
            document.body.getElementsByTagName("h1")[i].style.fontFamily = Page.font;
        }
    }
}

function themeSet() {
    console.log("Setting theme");
    Page.theme = localStorage.getItem("violetool-theme");
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

console.log("toolsetTheme.js loaded");
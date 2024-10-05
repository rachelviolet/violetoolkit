'use strict'
function fontSet() { // Different from artist.js
    if (localStorage.getItem("violetool-retro-font") == "1") Page.font = "VT323";
    else if (localStorage.getItem("violetool-retro-font") == "2") Page.font = "RobotoMono";
    else Page.font = "OpenSans";
    for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
        document.body.getElementsByTagName("*")[i].style.fontFamily = Page.font;
    }
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
        for(var i = 0; i < document.body.getElementsByTagName("input").length; i++) {
            document.body.getElementsByTagName("input")[i].style.fontSize = "14px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("textarea").length; i++) {
            document.body.getElementsByTagName("textarea")[i].style.fontSize = "14px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h1").length; i++) {
            document.body.getElementsByTagName("h1")[i].style.fontSize = "26px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h2").length; i++) {
            document.body.getElementsByTagName("h3")[i].style.fontSize = "20px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("h3").length; i++) {
            document.body.getElementsByTagName("h3")[i].style.fontSize = "16px";
        }
    }
    else if (Page.font == "VT323") {
        for(var i = 0; i < document.body.getElementsByTagName("p").length; i++) {
            document.body.getElementsByTagName("p")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("a").length; i++) {
            document.body.getElementsByTagName("a")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("li").length; i++) {
            document.body.getElementsByTagName("li")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("label").length; i++) {
            document.body.getElementsByTagName("label")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("input").length; i++) {
            document.body.getElementsByTagName("input")[i].style.fontSize = "23px";
        }
        for(var i = 0; i < document.body.getElementsByTagName("textarea").length; i++) {
            document.body.getElementsByTagName("textarea")[i].style.fontSize = "23px";
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
    }
    // else {

    // }
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
'use strict'
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
    console.log("Setting theme");
    theme = localStorage.getItem("violetool-theme");
    switch (theme) {
        case "0":
        default:
            document.body.style.backgroundColor = "#fafafa";
            for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
                document.body.getElementsByTagName("*")[i].style.color = "#101010";
            }
            for(var i = 0; i < document.body.getElementsByTagName("textarea").length; i++) {
                document.body.getElementsByTagName("textarea")[i].style.backgroundColor = "#fafafa";
                document.body.getElementsByTagName("textarea")[i].style.color = "#101010";
            }
            break;
        case "1":
            document.body.style.backgroundColor = "#101010";
            for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
                document.body.getElementsByTagName("*")[i].style.color = "#fafafa";
            }
            for(var i = 0; i < document.body.getElementsByTagName("textarea").length; i++) {
                document.body.getElementsByTagName("textarea")[i].style.backgroundColor = "#101010";
                document.body.getElementsByTagName("textarea")[i].style.color = "#fafafa";
            }
            break;
        case "2":
            document.body.style.backgroundColor = "#101010";
            for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
                document.body.getElementsByTagName("*")[i].style.color = "#cf9fff";
            }
            for(var i = 0; i < document.body.getElementsByTagName("textarea").length; i++) {
                document.body.getElementsByTagName("textarea")[i].style.backgroundColor = "#101010";
                document.body.getElementsByTagName("textarea")[i].style.color = "#cf9fff";
            }
            break;
    }
}

console.log("toolsetTheme.js loaded");
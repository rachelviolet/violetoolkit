'use strict'
const namePortuguese = "Ferramenta Violeta";
const nameEnglish = "Violet Toolkit"
const version = "24.7a3";
var page = "0";
var theme;
var themeDisabledColor = "#101010";
var themeEnabledColor = "#5C00A3";
var font;

if (localStorage.getItem("violetool-retro-font") == 1) font = "VT323";
else {
    font = "OpenSans";
    localStorage.setItem("violetool-retro-font", 0);
}
switch (localStorage.getItem("violetool-theme")) {
    case "0":
    default:
        localStorage.setItem("violetool-theme", 0);
        theme = 0;
        break;
    case "1":
        theme = 1;
        break;
    case "2":
        theme = 2;
        break;
}
const debugMode = false;
const freezeMode = false;

if (!debugMode) {
    console.log = function() {}
}

function websiteLoaded(source) {
    if (source == 1) {
        document.getElementById("no-js-style").remove();

        for(var i = 0; i < document.getElementsByClassName("js-exclusive").length; i++) {
            document.getElementsByClassName("js-exclusive")[i].style.display = "inline";
        }

        let layoutCSS = document.createElement("link");
        document.head.appendChild(layoutCSS);
        layoutCSS.setAttribute("id", "layout")
        layoutCSS.setAttribute("href", "../css/layout.css")
        layoutCSS.setAttribute("rel", "stylesheet")

        let screenCSS = document.createElement("link");
        document.head.appendChild(screenCSS);
        screenCSS.setAttribute("id", "screen-css")
        screenCSS.setAttribute("href", "../css/screen.css")
        screenCSS.setAttribute("rel", "stylesheet")

        switchPage("home-div");


        console.log("JavaScript is ON! Hurray!");
    }
    else {
        document.getElementById("js-err").style.display = "none";
        console.warn("Modified code detected.");
    }
    // langSet(undefined);
    fontSet(undefined);
    themeSet(undefined);
    document.getElementById("home-div").style.display = "block";
}

function changeTheme() {

}

console.log("main.js loaded");
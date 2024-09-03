'use strict'
const namePortuguese = "Ferramenta Violeta";
const nameEnglish = "Violet Toolkit"
const version = "24.9A";
const debugMode = false;
const freezeMode = false;

if (localStorage.getItem("violetool-retro-font") == 1) Page.font = "VT323";

else {
    Page.font = "OpenSans";
    localStorage.setItem("violetool-retro-font", 0);
}

if (!debugMode) {
    console.warn("Please make sure you know what you are doing.");
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
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

console.log("main.js loaded");
'use strict'
var webTheme = localStorage.getItem("violetool-theme-style");
var permCSSInsert = document.createElement("link");
document.head.appendChild(permCSSInsert);
permCSSInsert.setAttribute("rel", "stylesheet");

function websiteThemePick(themeModern, source) {
    console.log(`${themeModern} (not set webtheme ${webTheme}) theme from ${source}`);
    if (source == "config") {
        if (webTheme == "Modern") {
            webTheme = "Classic";
        }
        else {
            webTheme = "Modern";
        }
    }
    else {
        webTheme = themeModern;
    }
    localStorage.setItem("violetool-theme-style", webTheme);
    localStorage.setItem("violetool-firsttime", "143");
    console.log("All theme variables have been registered");
    skipThemeIntro();
}

function skipThemeIntro() {
    document.getElementById("preparation").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("screen").style.display = "block";
    if (webTheme == "Modern") {
        permCSSInsert.setAttribute("href", `../css/themeLayout${webTheme}.css`);
        console.log("Modern theme embedded");
    }
    if (webTheme == "Classic") {
        if (Page.theme == 0) {
            permCSSInsert.setAttribute("href", `../css/themeLayout${webTheme}Light.css`);
            console.log("Retro Light theme embedded");
        }
        else {
            permCSSInsert.setAttribute("href", `../css/themeLayout${webTheme}Dark.css`);
            console.log("Retro Dark theme embedded");
        }
    }
}

console.log("themePicker.js loaded");
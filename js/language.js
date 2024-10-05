'use strict'
const definedLanguages = ["en", "br"];
var language = localStorage.getItem("violetoolkit-language")

// var Spanish;

function langSet(change) {
    document.getElementById("titlev").textContent = version;
    console.log("Writing words into elements!");
    if (change !== false) {
        console.log("Changing language.")
        if (change == "en") {
            Page.language = "en";
        }
        else if (change == "br") {
            Page.language = "br";
        }
    }
    else {
        if (navigator.language.toLowerCase().includes("pt") && localStorage.getItem("violetoolkit-language") == null) Page.language = "br";
        else if (localStorage.getItem("violetoolkit-language") == null) Page.language = "en";
        else Page.language = localStorage.getItem("violetoolkit-language");
    }
    switch (Page.language) {
        case "en":
        default:
            console.log("Current Language: English (default option)");
            localStorage.setItem("violetool-lang", "en");
            break;
        case "br":
            console.log("Ídioma atual: Português Brasileiro");
            localStorage.setItem("violetool-lang", "br");
            break;
    }
}

console.log("languages.js loaded");
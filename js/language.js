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
            language = "en";
        }
        else if (change == "br") {
            language = "br";
        }
    }
    switch (language) {
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
'use strict'
const definedLanguages = ["en", "br"];
var language = localStorage.getItem("violetoolkit-language")

var English = {
    "englishUpdate": function() {
        if (page == "tool") return;
        this["tl1-count-full"] =  `${charCount.full} characters, spaces included.`;
        this["tl1-count-space0"] = `${charCount.space0} characters, no spaces.`;
        this["tl1-count-space1"] = `${charCount.space1} characters, only spaces.`;
        document.getElementById("tl1-count-full").textContent = this["tl1-count-full"]
        document.getElementById("tl1-count-space0").textContent = this["tl1-count-space0"]
        document.getElementById("tl1-count-space1").textContent = this["tl1-count-space1"]
    }
}

var Portuguese = {
    "portugueseUpdate": function() {
        if (page == "tool") return;
        this["tl1-count-full"] = `${charCount.full} caractere(s), com espaços.`;
        this["tl1-count-space0"] = `${charCount.space0} caractere(s), sem espaços.`;
        this["tl1-count-space1"] = `${charCount.space1} espaços.`;
        document.getElementById("tl1-count-full").textContent = this["tl1-count-full"]
        document.getElementById("tl1-count-space0").textContent = this["tl1-count-space0"]
        document.getElementById("tl1-count-space1").textContent = this["tl1-count-space1"]
    }
}

var Spanish;

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
            English.englishUpdate();
            break;
        case "br":
            console.log("Ídioma atual: Português Brasileiro");
            localStorage.setItem("violetool-lang", "br");
            Portuguese.portugueseUpdate();
            break;
    }
}

console.log("languages.js loaded");
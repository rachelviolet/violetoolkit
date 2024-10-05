'use strict'
var page = "tool";
const definedLanguages = ["en", "br"];
var language = localStorage.getItem("violetoolkit-language");
var font;
var theme;
var charCount = {
    "full": 0,
    "space0": 0,
    "space1": 0,
    "count": function () {
        let text = document.getElementById("tl1-text").value;
        this.full = text.length;

        let textSpace1 = text.match(/ /g);
        try {this.space1 = textSpace1.length}
        catch (error) {this.space1 = 0}

        let textSpace0 = text.replace(/ /g, '');
        if (this.space1 > 0) this.space0 = textSpace0.length;
        else this.space0 = this.full;

        if (this.full <= 0) this.space1 = 0;
        languageSwitch();
    }
}

var Languages = {
    "English": {
        "tl1-count-full": "0 character(s), spaces included.",
        "tl1-count-space0": "0 character(s), no spaces.",
        "tl1-count-space1": "0 space character(s).",
        "update": function() {
        this["tl1-count-full"] =  `${charCount.full} characters, spaces included.`;
        this["tl1-count-space0"] = `${charCount.space0} characters, no spaces.`;
        this["tl1-count-space1"] = `${charCount.space1} characters, only spaces.`;
        document.getElementById("tl1-count-full").textContent = this["tl1-count-full"]
        document.getElementById("tl1-count-space0").textContent = this["tl1-count-space0"]
        document.getElementById("tl1-count-space1").textContent = this["tl1-count-space1"]
        }
    },
    "Portuguese": {
        "tl1-count-full": "0 caractere(s), com espaços.",
        "tl1-count-space0": "0 caractere(s), sem espaços.",
        "tl1-count-space1": "0 espaço(s).",
        "update": function() {
        this["tl1-count-full"] = `${charCount.full} caractere(s), com espaços.`;
        this["tl1-count-space0"] = `${charCount.space0} caractere(s), sem espaços.`;
        this["tl1-count-space1"] = `${charCount.space1} espaços.`;
        document.getElementById("tl1-count-full").textContent = this["tl1-count-full"]
        document.getElementById("tl1-count-space0").textContent = this["tl1-count-space0"]
        document.getElementById("tl1-count-space1").textContent = this["tl1-count-space1"]
        }
    }
}

function languageSwitch(change) {;
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
            Languages.English.update();
            break;
        case "br":
            console.log("Ídioma atual: Português Brasileiro");
            localStorage.setItem("violetool-lang", "br");
            Languages.Portuguese.update();
            break;
    }
}

var ctrl2 = 0
document.addEventListener('keydown', function(event) {
    // console.log(event.key);
    let kPRess = event.key.toLowerCase();
    if (event.ctrlKey && ctrl2 == 0) {
        ctrl2 = 1;
        setTimeout(function() {ctrl2 = 0}, 1000);
    }
    else if (event.ctrlKey && ctrl2 == 1 && kPRess == "control") {
        window.open("./index.html", "_self");
    }
});

fontSet();
themeSet();
console.log("characterCount.js loaded");


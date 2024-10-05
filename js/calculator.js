'use strict'
var page = "tool";
const definedLanguages = ["en", "br"];
var language = localStorage.getItem("violetoolkit-language");
var font;
var theme;

var Languages = {
    "English": {
        "num1-text": "Number 1",
        "num2-text": "Number 2",
        "update": function() {
            document.getElementById("num1-text").textContent = this["num1-text"];
            document.getElementById("num2-text").textContent = this["num2-text"];
        }
    },
    "Portuguese": {
        "num1-text": "Número 1",
        "num2-text": "Número 2",
        "update": function() {
            document.getElementById("num1-text").textContent = this["num1-text"];
            document.getElementById("num2-text").textContent = this["num2-text"];
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
    let kPRess = event.key.toLowerCase();
    switch (kPRess) {
        case "+":
        default:
            Calculator.calculate(1);
            break;
        case "-":
            Calculator.calculate(2);
            break;
        case "*":
            Calculator.calculate(3);
            break;
        case "/":
            Calculator.calculate(4);
            break;
    }
    if (event.ctrlKey && ctrl2 == 0) {
        ctrl2 = 1;
        setTimeout(function() {ctrl2 = 0}, 1000);
    }
    else if (event.ctrlKey && ctrl2 == 1 && kPRess == "control") {
        window.open("./index.html", "_self");
    }
});

var Calculator = {
    number1: undefined,
    number2: undefined,
    memory: null,
    calculate: function(operation) {
        this.number1 = parseInt(document.getElementById("num1").value);
        this.number2 = parseInt(document.getElementById("num2").value);
        this.memory = operation;
        switch (operation) {
            case 1:
                document.getElementById("results").value = this.addition();
                break;
            case 2:
                document.getElementById("results").value = this.subtraction();
                break;
            case 3:
                document.getElementById("results").value = this.multiplication();
                break;
            case 4:
                document.getElementById("results").value = this.division();
                break;
        }
    },
    addition: function() {
        var result = this.number1 + this.number2;
        return result;
    },
    subtraction: function() {
        var result = this.number1 - this.number2;
        return result;
    },
    multiplication: function() {
        var result = this.number1 * this.number2;
        return result;
    },
    division: function() {
        var result = this.number1 / this.number2;
        return result;
    }
}

fontSet();
themeSet();
console.log("calculator.js loaded");
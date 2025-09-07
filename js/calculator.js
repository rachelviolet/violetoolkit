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
            document.title = "Ferramenta Violeta - Calculator";
            document.getElementById("num1-text").textContent = this["num1-text"];
            document.getElementById("num2-text").textContent = this["num2-text"];
        }
    },
    "Portuguese": {
        "num1-text": "Número 1",
        "num2-text": "Número 2",
        "update": function() {
            document.title = "Ferramenta Violeta - Calculadora";
            document.getElementById("num1-text").textContent = this["num1-text"];
            document.getElementById("num2-text").textContent = this["num2-text"];
        }
    }
}

var ctrl2 = 1
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
    if (event.key.toLowerCase() == "escape" && ctrl2 == 0) {
        ctrl2 = 1;
        setTimeout(function() {ctrl2 = 0}, 1000);
    }
    else if (event.key.toLowerCase() == "escape" && ctrl2 == 1) {
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
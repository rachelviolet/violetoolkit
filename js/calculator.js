'use strict'
var page = "tool";
const definedLanguages = ["en", "br"];
var language = localStorage.getItem("violetoolkit-language");
var font;
var theme;

var calcType;
const LENGTH = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
const WEIGHT = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
const LIQUID = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

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
                document.getElementById("results").innerText = this.addition();
                break;
            case 2:
                document.getElementById("results").innerText = this.subtraction();
                break;
            case 3:
                document.getElementById("results").innerText = this.multiplication();
                break;
            case 4:
                document.getElementById("results").innerText = this.division();
                break;
        }
    },
    addition: function() {
        return this.number1 + this.number2;
    },
    subtraction: function() {
        return this.number1 - this.number2;
    },
    multiplication: function() {
        return this.number1 * this.number2;
    },
    division: function() {
        return this.number1 / this.number2;
    },
    unitCalculate: function() {
        // TODO
        return;
    },
    dateCalculate: function() {

    }
}

function autoSetUnit() {
    if (document.getElementById("convert-1").value in LENGTH) console.log("TESSS")
    
}

function calcTypeChange(c) {
    calcType = c;
    if (c == 1) {
        document.getElementById("calctype-num").style.display = "inline";
        document.getElementById("calctype-con").style.display = "none";
        document.getElementById("calctype-dat").style.display = "none";
        document.getElementById("calctype-com").style.display = "none";
    }
    else if (c == 2) {
        autoSetUnit()
        document.getElementById("calctype-num").style.display = "none";
        document.getElementById("calctype-con").style.display = "inline";
        document.getElementById("calctype-dat").style.display = "none";
        document.getElementById("calctype-com").style.display = "none";
    }
    else if (c == 3) {
        document.getElementById("calctype-num").style.display = "none";
        document.getElementById("calctype-con").style.display = "none";
        document.getElementById("calctype-dat").style.display = "inline";
        document.getElementById("calctype-com").style.display = "none";
    }
    else if (c == 3) {
        document.getElementById("calctype-num").style.display = "none";
        document.getElementById("calctype-con").style.display = "none";
        document.getElementById("calctype-dat").style.display = "inline";
        document.getElementById("calctype-com").style.display = "inline";
    }
}

function defaultSetupCalc() {
    document.getElementById("ct").value = 1;
    document.getElementById("convert-1").value = 'kg';
    document.getElementById("convert-2").value = 'g';
    document.getElementById("num1").value = 1;
    Calculator.unitCalculate();
}

fontSet();
themeSet();
console.log("calculator.js loaded");
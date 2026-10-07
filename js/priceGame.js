
'use strict'
var mathNumber1 = 0.00;
var totalMathNum = 0.00;
var currency = "$"
var Game = {
    "correct": 0,
    "incorrect": 0,
    "choiceScreen": true,
    "answer": 0
}

const English = {
    "notepad-text": "Notepad:"
}
const Portuguese = {
    "notepad-text": "Bloco de notas:"
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
        Page.language = localStorage.getItem("violetool-lang");
    }
    switch (Page.language) {
        case "en":
        default:
            console.log("Current Language: English (default option)");
            localStorage.setItem("violetool-lang", "en");
            document.getElementById("notepad-text").textContent = English["notepad-text"];
            break;
        case "br":
            console.log("Ídioma atual: Português Brasileiro");
            localStorage.setItem("violetool-lang", "br");
            document.getElementById("notepad-text").textContent = Portuguese["notepad-text"];
            break;
    }
}

function returnFunction() {
    if ((Game.choiceScreen)) {
        window.open("./index.html", "_self");
    }
    else {
        leaveGame();
    }
}

var mathNumber2;
var answer;
function createMath() {
    mathNumber1 = parseFloat(totalMathNum);
    document.getElementById("score").textContent = `:) ${Game.correct} // :( ${Game.incorrect}`;
    document.getElementById("answer").focus();
    switch (Game.difficulty) {
        default:
        case 1:
            mathNumber2 = parseFloat((1 * (Math.random() * 30)).toFixed(2));
            break;
    }
    answer = parseFloat(mathNumber1) + parseFloat(mathNumber2);
    curUpdate(2);
}

function curUpdate(changeCur) {
    if (changeCur == 1) {
        currency = "$";
    }
    else if (changeCur == 2) {
        // NOTHING.
    }
    else {
        currency = "R$"
    }
    document.getElementById("equation").textContent = `${currency}${mathNumber1} + ${currency}${mathNumber2}`;
}

function answerQuestion() {
    if (parseFloat(document.getElementById("answer").value) == answer) {
            totalMathNum += mathNumber2
            Game.correct++;
    }
    else {
        Game.incorrect++;
    }
    console.log(`${Game.correct} CORRECT, ${Game.incorrect} INCORRECT`);
    createMath();
    document.getElementById("answer").value = "";
}

var ctrl2 = 1;
document.addEventListener('keydown', function(event) {
    let kPRess = event.key.toLowerCase();
    // console.log(kPRess)
    switch (kPRess) {
    case "enter":
        answerQuestion()
    }
    if (event.key.toLowerCase() == "escape" && ctrl2 == 0) {
        ctrl2 = 1;
        if (Game.choiceScreen) setTimeout(function() {ctrl2 = 0}, 1000);
        else setTimeout(function() {ctrl2 = 0}, 300);
    }
    else if (event.key.toLowerCase() == "escape" && ctrl2 == 1) {
        returnFunction();
    }
});
'use strict'
var Game = {
    "difficulty": 1,
    "difficultyText": "Regular",
    "operations": {
        1: true,
        2: true,
        3: true,
        4: true
    },
    "correct": 0,
    "incorrect": 0,
    "choiceScreen": true,
    "answer": 0
}

const English = {
    "title-ops": "Operations:",
    "title-default1": "Default: All",
    "addition": "(+) Addition (X)",
    "subtraction": "(-) Subtraction (X)",
    "multiplication": "(*) Multiplication (X)",
    "division": "(/) Division (X)",
    "title-difficulty": "Difficulty:",
    "title-default2": "Default: Regular",
    "title-chosen": "Current Difficulty: Regular",
    "diff1": "(1) Regular, 1-digit numbers",
    "diff2": "(2) Advanced, 2-digit numbers",
    "diff3": "(3) Expert, 3-digit numbers",
    "diff4": "(4) Expert+, 5-digit numbers with small fractional numbers",
    "diff5": "(5) Custom",
    "diff5-input": "x digits...",
    "start": "(ENTER) START",
    "info": "Make sure to use one or two decimal places, if necessary.",
    "notepad-text": "Notepad:",
    "settle": function() {
        if (Game.operations[1]) {
            this.addition = `(+) Addition (X)`;
        }
        else {
            this.addition = `(+) Addition ()`;
        }

        if (Game.operations[2]) {
            this.subtraction = `(-) Subtraction (X)`;
        }
        else {
            this.subtraction = `(-) Subtraction ()`;
        }

        if (Game.operations[3]) {
            this.multiplication = `(*) Multiplication (X)`;
        }
        else {
            this.multiplication = `(*) Multiplication ()`;
        }

        if (Game.operations[4]) {
            this.division = `(/) Division (X)`;
        }
        else {
            this.division = `(/) Division ()`;
        }

        this["title-chosen"] = `Current Difficulty: ${Game.difficultyText}`;
    }
}
const Portuguese = {
    "title-ops": "Operações:",
    "title-default1": "Padrão: Todas",
    "addition": "(+) Adição (X)",
    "subtraction": "(-) Subtração (X)",
    "multiplication": "(*) Multiplicação (X)",
    "division": "(/) Divisão (X)",
    "title-difficulty": "Difficulty:",
    "title-default2": "Padrão: Regular",
    "title-chosen": "Dificuldade Atual: Padrão",
    "diff1": "(1) Padrão, números com 1 dígito",
    "diff2": "(2) Avançado, números com 2 dígitos",
    "diff3": "(3) Experiente, números com 3 dígitos",
    "diff4": "(4) Mais Experiente, números com 5 dígitos com pequenos números fracionários",
    "diff5": "(5) Personalizado",
    "diff5-input": "x digitos...",
    "start": "(ENTER) INICIAR",
    "info": "Certifique-se de usar uma ou duas casas decimais, se necessário.",
    "notepad-text": "Bloco de notas:",
    "settle": function() {
        if (Game.operations[1]) {
            this.addition = `(+) Adição (X)`;
        }
        else {
            this.addition = `(+) Adição ()`;
        }

        if (Game.operations[2]) {
            this.subtraction = `(-) Subtração (X)`;
        }
        else {
            this.subtraction = `(-) Subtração ()`;
        }

        if (Game.operations[3]) {
            this.multiplication = `(*) Multiplicação (X)`;
        }
        else {
            this.multiplication = `(*) Multiplicação ()`;
        }

        if (Game.operations[4]) {
            this.division = `(/) Divisão (X)`;
        }
        else {
            this.division = `(/) Divisão ()`;
        }

        this["title-chosen"] = `Dificuldade Atual: ${Game.difficultyText}`;
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
        localStorage.setItem("violetoolkit-language", Page.language);
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
            English.settle();
            document.getElementById("title-ops").textContent = English["title-ops"];
            document.getElementById("title-default1").textContent = English["title-default1"];
            document.getElementById("addition").textContent = English["addition"];
            document.getElementById("subtraction").textContent = English["subtraction"];
            document.getElementById("multiplication").textContent = English["multiplication"];
            document.getElementById("division").textContent = English["division"];
            document.getElementById("title-difficulty").textContent = English["title-difficulty"];
            document.getElementById("title-default2").textContent = English["title-default2"];
            document.getElementById("title-chosen").textContent = English["title-chosen"];
            document.getElementById("diff1").textContent = English["diff1"];
            document.getElementById("diff2").textContent = English["diff2"];
            document.getElementById("diff3").textContent = English["diff3"];
            document.getElementById("diff4").textContent = English["diff4"];
            document.getElementById("diff5").textContent = English["diff5"];
            document.getElementById("diff5-a1").setAttribute("placeholder", English["diff5-input"]);
            document.getElementById("diff5-a2").setAttribute("placeholder", English["diff5-input"]);
            document.getElementById("start-math").textContent = English["start"];
            document.getElementById("info").textContent = English["info"];
            document.getElementById("notepad-text").textContent = English["notepad-text"];
            break;
        case "br":
            console.log("Ídioma atual: Português Brasileiro");
            localStorage.setItem("violetool-lang", "br");
            Portuguese.settle();
            document.getElementById("title-ops").textContent = Portuguese["title-ops"];
            document.getElementById("title-default1").textContent = Portuguese["title-default1"];
            document.getElementById("addition").textContent = Portuguese["addition"];
            document.getElementById("subtraction").textContent = Portuguese["subtraction"];
            document.getElementById("multiplication").textContent = Portuguese["multiplication"];
            document.getElementById("division").textContent = Portuguese["division"];
            document.getElementById("title-difficulty").textContent = Portuguese["title-difficulty"];
            document.getElementById("title-default2").textContent = Portuguese["title-default2"];
            document.getElementById("title-chosen").textContent = Portuguese["title-chosen"];
            document.getElementById("diff1").textContent = Portuguese["diff1"];
            document.getElementById("diff2").textContent = Portuguese["diff2"];
            document.getElementById("diff3").textContent = Portuguese["diff3"];
            document.getElementById("diff4").textContent = Portuguese["diff4"];
            document.getElementById("diff5").textContent = Portuguese["diff5"];
            document.getElementById("diff5-a1").setAttribute("placeholder", Portuguese["diff5-input"]);
            document.getElementById("diff5-a2").setAttribute("placeholder", Portuguese["diff5-input"]);
            document.getElementById("start-math").textContent = Portuguese["start"];
            document.getElementById("info").textContent = Portuguese["info"];
            document.getElementById("notepad-text").textContent = Portuguese["notepad-text"];
            break;
    }
}

function difficultyTweak(difficulty) {
    Game.difficulty = difficulty;
    switch (difficulty) {
        default:
        case 1:
            if (Page.language == "en") {
                Game.difficultyText = "Regular";
            }
            else {
                Game.difficultyText = "Padrão";
            }
            break;
        case 2:
            if (Page.language == "en") {
                Game.difficultyText = "Advanced";
            }
            else {
                Game.difficultyText = "Avançado";
            }
            break;
        case 3:
            if (Page.language == "en") {
                Game.difficultyText = "Expert";
            }
            else {
                Game.difficultyText = "Experiente";
            }
            break;
        case 4:
            if (Page.language == "en") {
                Game.difficultyText = "Expert+";
            }
            else {
                Game.difficultyText = "Mais experiente";
            }
            break;
        case 5:
            if (Page.language == "en") {
                Game.difficultyText = "Custom";
            }
            else {
                Game.difficultyText = "Personalizado";
            }
            break;
    }
    languageSwitch(Page.language);
}

function toggleOperations(operation) {
    Game.operations[operation] = !Game.operations[operation]
    if (!Game.operations[1] && !Game.operations[2] && !Game.operations[3] && !Game.operations[4]) {
        Game.operations[1] = true;
    }
    languageSwitch(Page.language);
}

function startGame() {
    document.getElementById("choices").style.display = "none";
    document.getElementById("start-math").style.display = "none";
    document.getElementById("exercises").style.display = "block";
    Game.choiceScreen = false;
    createMath();
}

function leaveGame() {
    document.getElementById("choices").style.display = "table";
    document.getElementById("start-math").style.display = "block";
    document.getElementById("exercises").style.display = "none";
    Game.choiceScreen = true;
}

function returnFunction() {
    if ((Game.choiceScreen)) {
        window.open("./index.html", "_self");
    }
    else {
        leaveGame();
    }
}

function createMath() {
    document.getElementById("score").textContent = `:) ${Game.correct} // :( ${Game.incorrect}`;
    document.getElementById("answer").focus();
    var mathNumber1;
    var mathNumber1Extra = 1;
    var mathNumber2;
    var chosenOperation;
    var symbol;
    var satisfied = false;
    switch (Game.difficulty) {
        default:
        case 1:
            mathNumber1 = Math.floor(Math.random() * 9)
            mathNumber2 = Math.floor(Math.random() * 9)
            break;
        case 2:
            mathNumber1 = Math.floor(Math.random() * 99)
            mathNumber2 = Math.floor(Math.random() * 99)
            break;
        case 3:
            mathNumber1 = Math.floor(Math.random() * 999)
            mathNumber2 = Math.floor(Math.random() * 999)
            break;
        case 4:
            let beFraction = Math.round(Math.random());
            if (beFraction == 1) {
                mathNumber1 = Math.floor(Math.random() * 99999)
                mathNumber2 = Math.floor(Math.random() * 99999)
            }
            else {
                mathNumber1 = Math.floor(Math.random() * 99)
                mathNumber1Extra = 1 + Math.floor(Math.random() * 98)
                mathNumber2 = Math.floor(Math.random() * 99)
            }
            break;
        case 5:
            let num1d = "9".repeat(document.getElementById("diff5-a1").value);
            if (num1d < 9) num1d = parseInt(9);
            let num2d = "9".repeat(document.getElementById("diff5-a2").value);
            if (num2d < 9) num2d = 9;
            mathNumber1 = Math.floor(Math.random() * parseInt(num1d))
            mathNumber2 = Math.floor(Math.random() * parseInt(num2d))
            break;
    }
    while (satisfied == false) {
        chosenOperation = Math.floor(Math.random() * 6 );
        if (chosenOperation <= 1 && Game.operations[1]) {
            satisfied = true;
            symbol = "+"
            Game.answer = (mathNumber1 / mathNumber1Extra) + mathNumber2;
        }
        if (chosenOperation == 2 && Game.operations[2]) {
            satisfied = true;
            symbol = "-"
            Game.answer = (mathNumber1 / mathNumber1Extra) - mathNumber2;
        }
        if (chosenOperation == 3 && Game.operations[3]) {
            satisfied = true;
            symbol = "*"
            Game.answer = (mathNumber1 / mathNumber1Extra) * mathNumber2;
        }
        if (chosenOperation > 3 && Game.operations[4]) {
            satisfied = true;
            symbol = "/"
            if (mathNumber1 < mathNumber2 && Game.difficulty <= 2) {
                let tempMath1 = mathNumber1;
                let tempMath2 = mathNumber2;
                mathNumber1 = tempMath2;
                mathNumber2 = tempMath1;
            }
            if (mathNumber1 == 0 || mathNumber2 == 0 || mathNumber1Extra == 0) return;
            Game.answer = (mathNumber1 / mathNumber1Extra) / mathNumber2;
        }
    }
    if (mathNumber1Extra <= 1) {
        document.getElementById("equation").textContent = `${mathNumber1} ${symbol} ${mathNumber2}`;
    }
    else {
        document.getElementById("equation").textContent = `(${mathNumber1}/${mathNumber1Extra}) ${symbol}${mathNumber2}`;
    }
    console.log(chosenOperation)
}

function answerQuestion() {
    if (parseFloat(document.getElementById("answer").value) == parseFloat(Game.answer.toFixed(2)) ||
        parseFloat(document.getElementById("answer").value) == parseFloat(Game.answer.toFixed(1)) ||
        parseInt(document.getElementById("answer").value) == Game.answer) {
        Game.correct++;
    }
    else {
        Game.incorrect++;
    }
    console.log(`${Game.correct} CORRECT, ${Game.incorrect} INCORRECT`);
    createMath();
    document.getElementById("answer").value = "";
}

var ctrl2 = 0;
document.addEventListener('keydown', function(event) {
    let kPRess = event.key.toLowerCase();
    // console.log(kPRess)
    if (document.activeElement == document.getElementById("diff5-a1") ||
        document.activeElement == document.getElementById("diff5-a2")) {
        return;
    }
    switch (kPRess) {
        case "+":
            if (!Game.choiceScreen) return;
            toggleOperations(1)
            break;
        case "-":
            if (!Game.choiceScreen) return;
            toggleOperations(2);
            break;
        case "*":
            if (!Game.choiceScreen) return;
            toggleOperations(3);
            break;
        case "/":
            if (!Game.choiceScreen) return;
            toggleOperations(4);
            break;
        case "1":
            if (!Game.choiceScreen) return;
            difficultyTweak(1);
            break;
        case "2":
            if (!Game.choiceScreen) return;
            difficultyTweak(2);
            break;
        case "3":
            if (!Game.choiceScreen) return;
            difficultyTweak(3);
            break;
        case "4":
            if (!Game.choiceScreen) return;
            difficultyTweak(4);
            break;
        case "5":
            if (!Game.choiceScreen) return;
            difficultyTweak(5);
            break;
        case "enter":
            if (!Game.choiceScreen) {
                answerQuestion()
            }
            else {
                startGame();
            }
            break;
    }
    if (event.ctrlKey && ctrl2 == 0) {
        ctrl2 = 1;
        if (Game.choiceScreen) setTimeout(function() {ctrl2 = 0}, 1000);
        else setTimeout(function() {ctrl2 = 0}, 300);
    }
    else if (event.ctrlKey && ctrl2 == 1 && kPRess == "control") {
        returnFunction();
    }
});
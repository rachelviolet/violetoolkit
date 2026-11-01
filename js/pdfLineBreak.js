'use strict'
const Languages = {
    "English": {
        "update": function() {
            document.getElementById("title").innerText = "PDF Line break fixer";
            document.getElementById("label-2").innerText = "Content";
        }
    },
    "Portuguese": {
        "update": function() {
            document.getElementById("title").innerText = "Consertador de quebra de linha de PDF";
            document.getElementById("label-2").innerText = "Conteúdo";
        }
    }
}


function lineBreakFixer() {
    console.debug("Running Line Break Fixer function");
    const content = document.getElementById("text-2").value;

    document.getElementById("code").innerText = content
    .replace(/\r?\n/g, "!@##@!")
    .replace(/([.;])!@##@!/g, "$1\n")
    .replace(/!@##@!/g, " ");
    // document.getElementById("code").innerText = content.replace(/\n/g, " ");
    console.debug(`End of Line Break Fixer Function. Content was ${content}`)
}

var ctrl2 = 0;
document.addEventListener('keydown', function(event) {
    let kPRess = event.key.toLowerCase();
    console.log(kPRess)
    if (event.ctrlKey && ctrl2 == 0) {
        ctrl2 = 1;
        setTimeout(function() {ctrl2 = 0}, 1000);
    }
    else if (event.ctrlKey && ctrl2 == 1 && kPRess == "control") {
            window.open("./index.html", "_self");
    }
});
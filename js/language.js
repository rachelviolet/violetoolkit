'use strict'
const definedLanguages = ["en", "br"];
var language = localStorage.getItem("violetoolkit-language")

var English = {
    "welcome": "Welcome to my website!",
    "title": "Violet Toolkit",
    "desc1": "Have fun!",

    "home": "(1)HOME",
    "information": "(2)INFORMATION",
    "skill": "(3)SKILLS",
    "tools": "(4)TOOLS",
    "about": "(5)ABOUT",

    "short-a": "(A+NUM)Menu buttons",
    "short-b": "(S+NUM)Screen buttons",
    "short-c": "(D)Cancel shortcut",

    "infoTitle": "Information",
    "comp-specs-info": "How to choose a computer, laptop or phone? Which specifications to look out for?",

    "skillTitle": "Skills",


    "toolsTitle": "Tools",
    "s5Writing": "(1) Character count",

    "tl1-count-full": `${charCount.full} character(s), spaces included.`,
    "tl1-count-space0": `${charCount.space0} character(s), no spaces.`,
    "tl1-count-space1": `${charCount.space1} space character(s).`,
    "tl1-count-text": "Press (CTRL) twice to leave or use the menu bar.",

    "settingsTitle": "Settings",
    "stt-theme": "Toggle theme",
    "stt-font": "Toggle font",

    "aboutTitle": "About",

    "aboutP1": 
`Welcome To The Violet Toolkit Website, where information and tools are accessible to all!\r\n
`,
    "aboutP2": 
`Do you have limited access to the internet?
Do you lack a keyboard or a mouse?
Are you using an older browser (possibly one from the 2010s)? Fear not! This website still works.
`,

    "test": "test",
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
    "welcome": "Boas-vindas ao meu site!",
    "title": "Ferramenta Violeta",
    "desc1": "Se divirta!",

    "home": "(1)INICIO",
    "information": "(2)INFORMAÇÃO",
    "skill": "(3)HABILIDADES",
    "tools": "(4)FERRAMENTAS",
    "about": "(5)SOBRE",

    "short-a": "(A+NUM)Botões do menu",
    "short-b": "(S+NUM)Botões da tela",
    "short-c": "(D)Cancelar atalho",

    "infoTitle": "Informação",
    "comp-specs-info": "Como escolher um computador, notebook ou celular? Quais especificações devo prestar atenção?",

    "skillTitle": "Habilidades",


    "toolsTitle": "Ferramentas",
    "s5Writing": "(1) Contagem de caracteres",

    "tl1-count-full": `${charCount.full} caractere(s), com espaços.`,
    "tl1-count-space0": `${charCount.space0} caractere(s), sem espaços.`,
    "tl1-count-space1": `${charCount.space1} espaços.`,
    "tl1-count-text": "Aperte (CTRL) duas vezes para sair ou use a barra do menu.",

    "settingsTitle": "Configurações",
    "stt-theme": "Alterar tema",
    "stt-font": "Alterar fonte",

    "aboutTitle": "Sobre",

    "aboutP1": 
`Te dou as boas-vindas ao site Ferramenta Violeta, onde informações e ferramentas são accessíveis para todas as pessoas!\r\n
`,
    "aboutP2":
`
Você tem acesso limitado à internet?
Você não tem um teclado ou um mouse?
Está usando um navegador antigo (possívelmente um de 2010)? Não se preocupe! Esse site ainda funciona.
`,

    "test": "test",
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
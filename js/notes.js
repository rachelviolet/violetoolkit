'use strict'
const definedLanguages = ["en", "br"];
const encoder = new TextEncoder();
const decoder = new TextDecoder();
var loadEncrypt = false;

function noteStart() {
    // document.getElementById('js-err').remove();
    if (localStorage.getItem("violetoolkit-notes-txt") != undefined) {
        document.getElementById("note").value = localStorage.getItem("violetoolkit-notes-txt");
    }
    setInterval(function() {
        localStorage.setItem("violetoolkit-notes-txt", document.getElementById("note").value);
    }, 1000)
}

const Languages = {
    "English": {
        "tl2-note-load": "(F1) Load note",
        "tl2-note-load2": "(F2) Load note (encrypted)",
        "tl2-note-save": "(F3) Save note",
        "tl2-note-save2": "(F4) Save note (encrypted)",
        "encrypt-disclaimer": "UTF-8 bytes encryption"
    },
    "Portuguese": {
        "tl2-note-load": "(F1) Carregar anotação",
        "tl2-note-load2": "(F2) Carregar anotação (criptografada)",
        "tl2-note-save": "(F3) Salvar anotação",
        "tl2-note-save2": "(F4) Salvar anotação (criptografada)",
        "encrypt-disclaimer": "Criptografia de bytes UTF-8"
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
        if (navigator.language.toLowerCase().includes("pt")) Page.language = "br";
        else Page.language = "en";
    }
    switch (Page.language) {
        case "en":
        default:
            console.log("Current Language: English (default option)");
            localStorage.setItem("violetool-lang", "en");
            document.getElementById("load-note").textContent = Languages.English["tl2-note-load"];
            document.getElementById("load-note2").textContent = Languages.English["tl2-note-load2"];
            document.getElementById("save-note").textContent = Languages.English["tl2-note-save"];
            document.getElementById("save-note2").textContent = Languages.English["tl2-note-save2"];
            document.getElementById("encrypt-disclaimer").textContent = Languages.English["encrypt-disclaimer"];
            break;
        case "br":
            console.log("Ídioma atual: Português Brasileiro");
            localStorage.setItem("violetool-lang", "br");
            document.getElementById("load-note").textContent = Languages.Portuguese["tl2-note-load"];
            document.getElementById("load-note2").textContent = Languages.Portuguese["tl2-note-load2"];
            document.getElementById("save-note").textContent = Languages.Portuguese["tl2-note-save"];
            document.getElementById("save-note2").textContent = Languages.Portuguese["tl2-note-save2"];
            document.getElementById("encrypt-disclaimer").textContent = Languages.Portuguese["encrypt-disclaimer"];
            break;
    }
}

function noteSave(encryptedMode) {
    let noteContent = document.getElementById("note").value;
    let name = "notes.txt";
    let content;
    if (encryptedMode) {
        let tempEncrypt = encoder.encode(noteContent);
        name = "notes-e.txt";

        console.log(noteContent);
        console.log(tempEncrypt);
        noteContent = tempEncrypt;
        content = new Blob([encoder.encode(noteContent)], {type: "text/plain"})
    }
    else {
        content = new Blob([noteContent], {type: "text/plain"})
    }
    let downloadable = document.createElement("a")
    let url = URL.createObjectURL(content);
    downloadable.href = url;
    downloadable.download = name;
    document.body.appendChild(downloadable);
    downloadable.click();
    document.body.removeChild(downloadable);
    window.URL.revokeObjectURL(url);
    // TODO: SAVE FILE
}

function notePreload(encryptToggle) {
    loadEncrypt = encryptToggle;
    document.getElementById("filesys").click();
}


function noteLoad() {
    console.log(document.getElementById("filesys").files[0])
    let readFile = new FileReader();
    var noteContent;
    console.log(readFile)
    try {
        readFile.readAsText(document.getElementById("filesys").files[0]);
        console.log(readFile.result)
        console.log(readFile)
        readFile.onload = function () {
            noteContent = readFile.result;
            console.log(noteContent)
            if (loadEncrypt) {
                let arrayContent = noteContent.split(",");
                var fileEncrypted = new Uint8Array(arrayContent);
                let tempEncrypt = decoder.decode(fileEncrypted);
                noteContent = tempEncrypt;
                document.getElementById("note").value = noteContent;
            }
            else {
                document.getElementById("note").value = noteContent;
            }
        }
    }
    catch (error) {
        console.error(`Error. ${error}`);
    }
    return
}

var ctrl2 = 0
document.addEventListener('keydown', function(event) {
    // console.log(event.key);
    if (event.key.toLowerCase() == "f1") {
        event.preventDefault();
        notePreload(false);
    }
    if (event.key.toLowerCase() == "f2") {
        event.preventDefault();
        notePreload(true);
    }
    if (event.key.toLowerCase() == "f3") {
        event.preventDefault();
        noteSave(false);
    }
    if (event.key.toLowerCase() == "f4") {
        event.preventDefault();
        noteSave(true);
    }
    if (event.ctrlKey && ctrl2 == 0) {
        ctrl2 = 1;
        setTimeout(function() {ctrl2 = 0}, 1000);
    }
    else if (event.ctrlKey && ctrl2 == 1) {
        window.open("./index.html", "_self");
    }
});

fontSet();
themeSet();
console.log("notes.js loaded");
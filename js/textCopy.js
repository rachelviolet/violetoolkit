'use strict'
let curButton = 0;
let latest = 0;
let fullReset = 0;

var Languages = {
    "English": {
        "label": "Text to Insert",
        "insert": "Insert",
        "remove": "Remove 🗑️",
        update: function() {
            document.getElementById("text-l").textContent = Languages.English.label;
            document.getElementById("text-ins").textContent = Languages.English.insert;
            // document.getElementById("text-del").textContent = Languages.English.remove;
        },
    },
    "Portuguese": {
        "label": "Texto para inserir",
        "insert": "Inserir",
        "remove": "Remover 🗑️",
        update: function() {
            document.getElementById("text-l").textContent = Languages.Portuguese.label;
            document.getElementById("text-ins").textContent = Languages.Portuguese.insert;
            // document.getElementById("text-del").textContent = Languages.Portuguese.remove;
        },
    }
}

var SavedCopies = {
    
}

function addTextIn(textOut, item) {
    let text;
    if (textOut != undefined && item != undefined) {
        text = textOut;
        curButton = item;
    }
    else {
        text = document.getElementById("text").value;
    }
    let bttC = document.createElement("button");
    let bttR = document.createElement("button");
    let gap = document.createElement("br");
    curButton++;
    latest++;
    bttC.id = `copier-${curButton}`;
    bttC.textContent = text;
    bttR.id = `copier-${curButton}-del`;
    if (Page.language == "en") {
        bttR.textContent = Languages.English.remove;
    }
    else {
        bttR.textContent = Languages.Portuguese.remove;
    }
    gap.id = `copier-${curButton}-gap`;
    bttC.setAttribute("onclick", `copyItem(${curButton})`);
    bttR.setAttribute("onclick", `removeTextIn(${curButton})`);
    document.getElementById("copy-div").appendChild(bttC);
    document.getElementById("copy-div").appendChild(bttR);
    document.getElementById("copy-div").appendChild(gap);
    SavedCopies[curButton] = text;
    console.log("Item added");
}

function removeTextIn(item) {
    document.getElementById(`copier-${item}`).remove();
    document.getElementById(`copier-${item}-del`).remove();
    document.getElementById(`copier-${item}-gap`).remove();
    SavedCopies[item] = "";
}

function copyItem(item) {
    navigator.clipboard.writeText(document.getElementById(`copier-${item}`).textContent);
    document.getElementById(`copier-${item}`).style.color = "#00ff00";
    setTimeout(`document.getElementById("copier-${item}").style.color = "${Page.fontColor}";`, 1000);
}

function saveInBrowser(item, text) {
    console.log("Item saved");
    localStorage.setItem("violetool-tc-latest", latest);
    localStorage.setItem("violetool-tc-copies", JSON.stringify(SavedCopies));
}

function loadFromBrowser() {
    if (isNaN(localStorage.getItem("violetool-tc-latest"))) {
        console.log("No content available");
        localStorage.setItem("violetool-tc-latest", latest);
    }
    else {
        console.log("Downloading saved content");
        latest = localStorage.getItem("violetool-tc-latest");
        let TSavedCopies = JSON.parse(localStorage.getItem("violetool-tc-copies"));
        console.log("Adding previous saved content");
        let y = Object.keys(TSavedCopies).length;
        for (let x = 0; x < y; x++) {
            console.log(x)
            console.log(Object.values(TSavedCopies)[x]);
            console.log(Object.keys(TSavedCopies)[x]);
            addTextIn(Object.values(TSavedCopies)[x], Object.keys(TSavedCopies)[x]);
        }
        console.log("Added previous saved content");
        themeSet();
        curButton = latest;
    }

}

function resetItems() {
    if (fullReset == 0) {
        document.getElementById("text-rst").style.color = "#ff0000";
        fullReset++;
        console.log("About to reset");
    }
    else if (fullReset == 1) {
        document.getElementById("copy-div").remove();
        SavedCopies = {};
        curButton = 0;
        latest = 0;
        let newDiv = document.createElement("div");
        newDiv.id = "copy-div"
        fullReset = 0;
        document.getElementById("text-rst").style.color = `${Page.fontColor}`;
        document.body.append(newDiv);
        document.getElementById("copy-div").setAttribute("class", "inn-all-block");
        console.log("Reset successful");
        saveInBrowser();
    }
}
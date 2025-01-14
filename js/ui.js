const blockedPages = ["tool-t1-char-count"];
var UpdatedPageDivElement;

function switchPage(pg) {
    var pageDivs = document.getElementsByClassName("sdiv")
    for (x = 0; x < pageDivs.length; x++) {
        pageDivs[x].style.display = 'none';
    }
    
    try {
        document.getElementById(pg).style.display = "block";
    }
    catch (error) {
        console.error("Page does not exist.")
    }
    Page.current = pg;
    UpdatedPageDivElement = document.getElementsByClassName(`${Page.current}-elements`);
    currentInputOptionCap = UpdatedPageDivElement.length;
    inputVisualCheck();
}

function skillsTabFunction(x) {
    if (x == 1) {
        document.getElementById("skills-info").style.display = "block";
        document.getElementById("skills-summary").style.display = "none";
        inputOption = 1;
    }
    else {
        document.getElementById("skills-info").style.display = "none";
        document.getElementById("skills-summary").style.display = "block";
        inputOption = 2;
    }
    inputVisualCheck();
}

function themeSet() {
    Page.theme = localStorage.getItem("violetool-theme");
    console.log(Page.theme);
    switch (Page.theme) {
        default:
        case "0":
            Page.fontColor = "#101010";
            Page.bodyColor = "#fafafa";
            Page.backgroundColor = "#fafafa";
            Page.disabledColor = "#101010";
            Page.enabledColor = "#5C00A3";
            break;
        case "1":
            Page.fontColor = "#fafafa";
            Page.bodyColor = "#101010";
            Page.backgroundColor = "#101010";
            Page.disabledColor = "#fafafa";
            Page.enabledColor = "#5C00A3";
            break;
        case "2":
            Page.fontColor = "#cf9fff";
            Page.bodyColor = "#101010";
            Page.backgroundColor = "#101010";
            Page.disabledColor = "#cf9fff";
            Page.enabledColor = "#ead4ff";
            break;
    }
    document.body.style.backgroundColor = Page.bodyColor;
    for(var i = 0; i < document.body.getElementsByTagName("*").length; i++) {
        document.body.getElementsByTagName("*")[i].style.color = Page.fontColor;
    }
    for(var i = 0; i < document.body.getElementsByTagName("textarea").length; i++) {
        document.body.getElementsByTagName("textarea")[i].style.backgroundColor = Page.backgroundColor;
        document.body.getElementsByTagName("textarea")[i].style.color = Page.fontColor;
    }
    for(var i = 0; i < document.body.getElementsByTagName("input").length; i++) {
        document.body.getElementsByTagName("input")[i].style.backgroundColor = Page.backgroundColor;
        document.body.getElementsByTagName("input")[i].style.color = Page.fontColor;
    }
}

console.log("ui.js loaded");
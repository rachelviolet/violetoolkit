'use strict'
var Page = {
    current: "tool",
    font: localStorage.getItem("violetool-retro-font"),
    theme: undefined,
    language: localStorage.getItem("violetool-lang"),
    fontColor: localStorage.getItem("violetool-color-fg"),
    backgroundColor: localStorage.getItem("violetool-color-bg"),
    bodyColor: localStorage.getItem("violetool-color-body"),
    disabledColor: localStorage.getItem("violetool-color-disabled"),
    enabledColor: localStorage.getItem("violetool-color-enabled"),
    themeLockdown: 0
}
if (Page.fontColor == undefined) {
    Page.fontColor = "#101010";
}
if (Page.backgroundColor == undefined) {
    Page.backgroundColor = "#101010";
}
if (Page.bodyColor == undefined) {
    Page.bodyColor = "#fafafa";
}

if (Page.disabledColor == undefined) {
    Page.disabledColor = "#101010";
}
if (Page.enabledColor == undefined) {
    Page.enabledColor = "#101010";
}
var language = Page.language;

Page.theme = localStorage.getItem("violetool-theme");
if (Page.theme == undefined && Page.theme != "x") {
    localStorage.setItem("violetool-theme", 0);
}

function toggleDarkTheme() {
    if (localStorage.getItem("violetool-theme") == "1") {
        localStorage.setItem("violetool-theme", "0")
    }
    else if (localStorage.getItem("violetool-theme") == "0") {
        localStorage.setItem("violetool-theme", "1")
    }
    themeSet();
}


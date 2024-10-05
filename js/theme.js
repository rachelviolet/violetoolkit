'use strict'
var Page = {
    current: "tool",
    font: localStorage.getItem("violetool-retro-font"),
    theme: undefined,
    language: localStorage.getItem("violetoolkit-language"),
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

function themePreset() {
    Page.theme = localStorage.getItem("violetool-theme");
    console.log(Page.theme);
    switch (Page.theme) {
        default:
            if (Page.themeLockdown < 2) {
                console.warn(`Custom Theme Detected ${Page.theme}. Press the button again to force a theme change.`);
                Page.themeLockdown++;
            }
            else if (Page.themeLockdown == 2) {
                localStorage.setItem("violetool-theme", 0);
                Page.themeLockdown == 0;
                themePreset();
            }
            break;
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
    themeToLocalStorage();
}

function themeToLocalStorage() {
    localStorage.setItem("violetool-color-fg", Page.fontColor);
    localStorage.setItem("violetool-color-bg", Page.backgroundColor);
    localStorage.setItem("violetool-color-body", Page.bodyColor);
    localStorage.setItem("violetool-color-disabled", Page.disabledColor);
    localStorage.setItem("violetool-color-enabled", Page.enabledColor);
}
'use strict'
var fontColor = localStorage.getItem("violetool-color-fg");
var backgroundColor = localStorage.getItem("violetool-color-bg");
var bodyColor = localStorage.getItem("violetool-color-body");

var disabledColor = localStorage.getItem("violetool-color-disabled");
var enabledColor = localStorage.getItem("violetool-color-enabled");

var temporaryThemeLockdown = 0;

if (fontColor == undefined) {
    fontColor = "#101010";
}
if (backgroundColor == undefined) {
    backgroundColor = "#101010";
}
if (bodyColor == undefined) {
    bodyColor = "#fafafa";
}

if (disabledColor == undefined) {
    disabledColor = "#101010";
}
if (enabledColor == undefined) {
    enabledColor = "#101010";
}

var theme = localStorage.getItem("violetool-theme");
if (theme == undefined && theme != "x") {
    localStorage.setItem("violetool-theme", 0);
}

function themePreset() {
    theme = localStorage.getItem("violetool-theme");
    console.log(theme);
    switch (theme) {
        default:
            if (temporaryThemeLockdown < 2) {
                console.warn(`Custom Theme Detected ${theme}. Press the button again to force a theme change.`);
                temporaryThemeLockdown++;
            }
            else if (temporaryThemeLockdown == 2) {
                localStorage.setItem("violetool-theme", 0);
                temporaryThemeLockdown == 0;
                themePreset();
            }
            break;
        case "0":
            fontColor = "#101010";
            bodyColor = "#fafafa";
            backgroundColor = "#fafafa";
            disabledColor = "#101010";
            enabledColor = "#5C00A3";
            break;
        case "1":
            fontColor = "#fafafa";
            bodyColor = "#101010";
            backgroundColor = "#101010";
            disabledColor = "#fafafa";
            enabledColor = "#5C00A3";
            break;
        case "2":
            fontColor = "#cf9fff";
            bodyColor = "#101010";
            backgroundColor = "#101010";
            disabledColor = "#cf9fff";
            enabledColor = "#ead4ff";
            break;
    }
    themeToLocalStorage();
}

function themeToLocalStorage() {
    localStorage.setItem("violetool-color-fg", fontColor);
    localStorage.setItem("violetool-color-bg", backgroundColor);
    localStorage.setItem("violetool-color-body", bodyColor);
    localStorage.setItem("violetool-color-disabled", disabledColor);
    localStorage.setItem("violetool-color-enabled", enabledColor);
}
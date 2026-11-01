'use strict'
function languageSwitch(change) {;
    console.log("Writing words into elements!");
    if (change !== false) {
        console.log("Changing language.")
        if (change == "en") {
            Page.language = "en";
        }
        else if (change == "es") {
            Page.language = "es";
        }
        else if (change == "br") {
            Page.language = "br";
        }
    }
    else {
        Page.language = localStorage.getItem("violetoolkit-language");
    }
    switch (Page.language) {
        case "en":
        default:
            console.log("Current Language: English (default option)");
            localStorage.setItem("violetoolkit-language", "en");
            try {
                Languages.English.update();
            }
            catch {
                console.debug("LANGUAGE-TRY-CATCH is a temporary solution! Promise I'll find a permanent solution EVENTUALLY!")
            }
            break;
        case "es":
            // console.log("Ídioma atual: Português Brasileiro");
            // localStorage.setItem("violetoolkit-language", "br");
            // break;
        case "br":
            console.log("Ídioma atual: Português Brasileiro");
            localStorage.setItem("violetoolkit-language", "br");
            try {
                Languages.Portuguese.update();
            }
            catch {
                console.debug("LANGUAGE-TRY-CATCH is a temporary solution! Promise I'll find a permanent solution EVENTUALLY!")
            }
            break;
    }
}
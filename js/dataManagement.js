'use strict'
var localData = JSON.parse(localStorage.getItem("violetool-dman"));
if (localData == undefined) {
    localData = {
        main: {
            "code": `${localData}`,
            "restore": function() {
                localData.main.code = `${localData}`;
            }
        },
    }
}
var onTool = false;

function loadData() {

}

function saveData() {

}

function languageSwitch() {
    
}

var ctrl2 = 0;
document.addEventListener('keydown', function(event) {
    let kPRess = event.key.toLowerCase();
    if (event.ctrlKey && ctrl2 == 0) {
        ctrl2 = 1;
        setTimeout(function() {ctrl2 = 0}, 1000);
    }
    else if (event.ctrlKey && ctrl2 == 1 && kPRess == "control") {
        if (onTool) {
            displayTool(0);
        }
        else {
            window.open("./index.html", "_self");
        }
    }
});

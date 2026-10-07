'use strict'
function displayTool(tool) {
    document.getElementById("main-screen").style.display = "none";
    if (tool == 1) {
        document.getElementById("data-input-output").style.display = "inline";
        onTool = true;
    }
    else if (tool = 2) {
        document.getElementById("text-alter-tools").style.display = "inline";
        onTool = true;
    }
    else {
        document.getElementById("text-alter-tools").style.display = "none";
        document.getElementById("data-input-output").style.display = "none";
        document.getElementById("main-screen").style.display = "inline";
        onTool = false;
    }
}

// function createData() {
//     localData[Object.keys(localData).length];
// }

function modifyData() {
    localData[document.getElementById("data-id").value] = document.getElementById("data-value").value;
}

function compareDataValue(data1, data2) {
    return data2 - data1;
}

function compareDataPercent(data1, data2) {
    return (data2 * 100) / data1;
}

function resetData() {
    localData.main.restore();
    // TODO: button animation
    console.log("Data reset!");
}

function a() { // TEMPORARY DEBUG FEATURE
    console.log(localData)
    console.log("---------------------")
    console.log(localData[Object.keys(localData).length]);
}
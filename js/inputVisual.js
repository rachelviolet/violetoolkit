'use strict'
var inputLayer = 1;
var inputOption = 1;
var currentInputLayerCap = 6;
var currentInputOptionCap = 1;

function inputVisualCheck() {
    for (let n = 1; n < 7; n++) {
        document.getElementById(`mn-${n}`).style.fontWeight = "normal";
    }
    document.getElementById(`mn-${inputLayer}`).style.fontWeight = "bold";
    
    for (let n = 1; n < 15; n++) {
        try {
            document.getElementById(`${Page.current}-${n}`).style.fontWeight = "normal";
        }
        catch {}
    }
    try {
        document.getElementById(`${Page.current}-${inputOption}`).style.fontWeight = "bold";
    }
    catch {}

    // console.log(`InputVisualLocation: ${inputLayer}x${inputOption}`);

}
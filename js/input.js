'use strict'
var preinput = 0;
var preinputBlock = false;

document.addEventListener('keydown', function(event) {
  // console.log(event.key);
  let kPRess = event.key.toLowerCase();
  for (x = 0; x < blockedPages.length; x++) {
    if (Page["current"].includes(blockedPages[x])) {
      preinputBlock = true;
    }
    else {
      preinputBlock = false;
    }
  }

  if (event.key.toLowerCase() == "escape" && !kPRess) return

  if (!blockedPages.includes(Page.current)) {
    switch (kPRess) {
      case "q":
        window.open("../en-us/index.html", "_self");
        break;
      case "w":
        window.open("../pt-br/index.html", "_self");
        break;
      case "arrowleft":
        if (inputLayer <= 1) {
          return;
        }
        inputLayer--;
        inputOption = 1;
        inputSender(1);
        break;
      case "arrowright":
        if (inputLayer >= currentInputLayerCap) {
          return;
        }
        inputLayer++;
        inputOption = 1;
        inputSender(1);
        break;
      case "arrowup":
        if (inputOption <= 1) {
          return;
        }
        inputOption--;
        if (inputLayer == 3) {
          skillsTabFunction(1)
        }
        break;
      case "arrowdown":
        if (inputOption >= currentInputOptionCap) {
          return;
        }
        inputOption++;
        if (inputLayer == 3) {
          skillsTabFunction(2)
        }
        break;
      case "enter":
        inputSender(2);
        break;
      case "escape":
        inputLayer = 1;
        inputOption = 1;
        document.getElementById(`mn-1`).click();
    }
    inputVisualCheck();
  }
});

function inputSender(option) {
  if (option == 1) {
    document.getElementById(`mn-${inputLayer}`).click();
  }
  if (option == 2) {
    try {
      document.getElementById(`${Page.current}-${inputOption}`).click();
    }
    catch {}
    }
}

console.log("input.js loaded");
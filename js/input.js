'use strict'
var preinput = 0;
var preinputBlock = false;

document.addEventListener('keydown', function(event) {
  // console.log(event.key);
  for (x = 0; x < blockedPages.length; x++) {
    if (page.includes(blockedPages[x])) preinputBlock = true;
    else preinputBlock = false;
  }
  if (event.key.toLowerCase() == 'a' && !preinputBlock) preinput = 1;
  if (event.key.toLowerCase() == 's' && !preinputBlock) preinput = 2;
  if (event.key.toLowerCase() == 'd' && !preinputBlock) preinput = 0;

  drawApp();

  if (event.ctrlKey && page == "tool-t1-char-count") {
    console.log(event.key);
    if (event.ctrlKey && preinput == 3 && event.key.toLowerCase() == "control") {
      switchPage('tools-div')
      preinput = 0;
      preinputBlock = false;
      return;
    }
    preinput = 3;
    setTimeout(() => {
      if (page == "tool-t1-char-count") preinput = 0;
    },  700);
  }
  else if (page == "tool-t1-char-count") preinput = 0

  if (event.key == '1') {
    if (preinput != 1 && preinput != 2) return;
    if (preinput == 1) switchPage('home-div');
    if (preinput == 2) {
      switch (page) {
        default:
        case "home-div":
          break;
        case "info-div":
          window.open('./specs-info.html', '_self');
          break;
        case "games-div":
          break;
        case "tools-div":
          switchPage('tool-t1-char-count');
          preinputBlock = true;
          break;
        case "about-div":
          break;
        case "settings-div":
          themeSet(true);
          break;
      }
      preinput = 0;
      return;
    }
    switchPage('home-div');
    preinput = 0;
  }

  if (event.key == '2') {
    if (preinput != 1 && preinput != 2) return;
    if (preinput == 1) switchPage('info-div');
    if (preinput == 2) {
      switch (page) {
        default:
        case "home-div":
          break;
        case "info-div":
          break;
        case "games-div":
          break;
        case "tools-div":
          break;
        case "about-div":
          break;
        case "settings-div":
          fontSet(true);
          break;
      }
      preinput = 0;
      return;
    }
    preinput = 0;
  }

  if (event.key == '3') {
    if (preinput != 1 && preinput != 2) return;
    if (preinput == 1) switchPage('skill-div');
    preinput = 0;
  }

  if (event.key == '4') {
    if (preinput != 1 && preinput != 2) return;
    if (preinput == 1) switchPage('tools-div');
    preinput = 0;
  }

  if (event.key == '5') {
    if (preinput != 1 && preinput != 2) return;
    if (preinput == 1) switchPage('about-div');
    preinput = 0; 
  }

  if (event.key == 'q') {
    if (preinput != 1 && preinput != 2) return;
    window.open('../en-us/index.html', '_self')
    preinput = 0; 
  }

  if (event.key == 'w') {
    if (preinput != 1 && preinput != 2) return;
    window.open('../pt-br/index.html', '_self')
    preinput = 0; 
  }

  if (event.key == 'e') {
    if (preinput != 1 && preinput != 2) return;
    switchPage('settings-div');
    preinput = 0; 
  }
});
console.log("input.js loaded");
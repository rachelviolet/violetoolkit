'use strict'
var preinput = 0;
var preinputBlock = false;

document.addEventListener('keydown', function(event) {
  // console.log(event.key);
  let kPRess = event.key.toLowerCase();
  for (x = 0; x < blockedPages.length; x++) {
    if (page.includes(blockedPages[x])) preinputBlock = true;
    else preinputBlock = false;
  }
  // if (event.key.toLowerCase() == 'a' && !preinputBlock) preinput = 1;
  // if (event.key.toLowerCase() == 's' && !preinputBlock) preinput = 2;
  // if (event.key.toLowerCase() == 'd' && !preinputBlock) preinput = 0;

  drawApp();

  if (!blockedPages.includes(page)) {
    switch (kPRess) {
      case "h":
        switchPage("home-div");
        break;
      case "n":
        switchPage("info-div");
        break;
      case "c":
        switchPage("skill-div");
        break;
      case "t":
        switchPage("tools-div");
        break;
      case "o":
        switchPage("about-div");
        break;
      case "q":
        window.open('../en-us/index.html', '_self')
        break;
      case "w":
        window.open('../pt-br/index.html', '_self')
        break;
      case "e":
        switchPage("settings-div");
        break;
      case "1":
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
            window.open('../tool-char-count.html', '_self')
            preinputBlock = true;
            break;
          case "about-div":
            break;
          case "settings-div":
            themeSet(true);
            break;
        }
        break;
      case "2":
        switch (page) {
          default:
          case "home-div":
            break;
          case "info-div":
            break;
          case "games-div":
            break;
          case "tools-div":
            window.open("../tool-note.html", "_self");
            break;
          case "about-div":
            break;
          case "settings-div":
            fontSet(true);
            break;
        }
        break;
      case "3":
        switch (page) {
          default:
          case "home-div":
            break;
          case "info-div":
            break;
          case "games-div":
            break;
          case "tools-div":
            window.open("../tool-calculator.html", "_self");
            break;
          case "about-div":
            break;
          case "settings-div":
            fontSet(true);
            break;
        }
        break;
      case "h":
        switchPage("home-div");
        break;
    }
  }
});
console.log("input.js loaded");
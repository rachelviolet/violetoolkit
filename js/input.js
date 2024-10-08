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

  if (event.ctrlKey && !kPRess) return

  drawApp();

  if (!blockedPages.includes(Page.current)) {
    switch (kPRess) {
      case "h":
        switchPage("home-div");
        break;
      case "m":
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
        switch (Page.current) {
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

        switch (Page.current) {
          default:
          case "home-div":
            break;
          case "info-div":
            // LAPTOP AD
            if (Page.language == "br") {
              window.open('https://youtu.be/DXbbWhK0mag', '_blank');
            }
            else {
              window.open('https://youtu.be/LHyMaIi_vAk', '_blank');
            }
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
        switch (Page.current) {
          default:
          case "home-div":
            break;
          case "info-div":
            window.open('https://www.youtube.com/@AprendaInglesAgoraNow', '_blank');
            break;
          case "games-div":
            break;
          case "tools-div":
            window.open("../tool-calculator.html", "_self");
            break;
          case "about-div":
            break;
          case "settings-div":
            break;
        }
        break;
      case "4":
        switch (Page.current) {
          default:
          case "home-div":
            break;
          case "info-div":
            window.open("https://www.amazon.com.br/dp/B0DCTY9LXD", "blank");
            break;
          case "games-div":
            break;
          case "tools-div":
            break;
          case "about-div":
            break;
          case "settings-div":
            break;
        }
        break;
      case "5":
        switch (Page.current) {
          default:
          case "home-div":
            break;
          case "info-div":
            window.open("../brazil.html", "_self");
            break;
          case "games-div":
            break;
          case "tools-div":
            break;
          case "about-div":
            break;
          case "settings-div":
            break;
        }
        break;
      case "6":
        switch (Page.current) {
          default:
          case "home-div":
            break;
          case "info-div":
            window.open("../math.html", "_self");
            break;
          case "games-div":
            break;
          case "tools-div":
            break;
          case "about-div":
            break;
          case "settings-div":
            break;
        }
        break;
      case "7":
        switch (Page.current) {
          default:
          case "home-div":
            break;
          case "info-div":
            window.open("../samples/e-commerce/index.html", "_self");
            break;
          case "games-div":
            break;
          case "tools-div":
            break;
          case "about-div":
            break;
          case "settings-div":
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
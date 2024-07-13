const blockedPages = ["tool-t1-char-count"];

function switchPage(pg) {
    var pageDivs = document.getElementsByClassName("sdiv")
    for (x = 0; x < pageDivs.length; x++) {
        pageDivs[x].style.display = 'none';
    }

    try {document.getElementById(pg).style.display = "block";}
    catch (error) {console.error("Page does not exist.")}
    page = pg;
}
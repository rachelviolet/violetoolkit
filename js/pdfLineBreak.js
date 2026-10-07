'use strict'

function lineBreakFixer() {
    console.debug("Running Line Break Fixer function");
    const content = document.getElementById("text-2").value;

    document.getElementById("code").innerText = content
    .replace(/\r?\n/g, "!@##@!")
    .replace(/([.;])!@##@!/g, "$1\n")
    .replace(/!@##@!/g, " ");
    // document.getElementById("code").innerText = content.replace(/\n/g, " ");
    console.debug(`End of Line Break Fixer Function. Content was ${content}`)
}
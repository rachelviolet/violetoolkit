'use strict'

var page = "tool";
const definedLanguages = ["en", "br"];
var language = localStorage.getItem("violetoolkit-language");
var font;
var theme;

var Languages = {
    "English": {
        "copy-txt": "Click a number to automatically copy it",
        "disclaimer": "If you're having trouble with the Phone Number Formatting Tool (BR or CA/US), try using a number format as described in the examples.",
        "num-br-prefix": "Extra Number Prefix (BR)",
        "num-north-prefix": "Extra Number Prefix (CA/US)",
        "num-other-prefix": "Extra Number Prefix (OTHER)",
        "disclaimer-2":
        `Please, don't forget to use one of the two formats:\n+xx xxx xxxx-xxxx\n+xxxxxxxxxxxxx
With the first set of digits being the country code, the second set of digits being the area/city/state code and the third set of digits being the phone number.
Compatible with every country, including Brazil, Canada and the United States of America (USA / US).`,
        "num2-text": "Country Code",
        "num3-text": "Area Code",
        "num4-text": "Phone Number",
        "num5-text": "Extra Number Suffix",
        "update": function() {
            document.getElementById("copy-txt").textContent = this["copy-tt"];
            document.getElementById("disclaimer").textContent = this["disclaimer"];
            document.getElementById("disclaimer-2").textContent = this["disclaimer-2"];
            document.getElementById("num-br-prefix-text").textContent = this["num-br-prefix"];
            document.getElementById("num-north-prefix-text").textContent = this["num-north-prefix"];
            document.getElementById("num-other-prefix-text").textContent = this["num-other-prefix"];
            document.getElementById("num2-text").textContent = this["num2-text"];
            document.getElementById("num3-text").textContent = this["num3-text"];
            document.getElementById("num4-text").textContent = this["num4-text"];
            document.getElementById("num5-text").textContent = this["num5-text"];
        }
    },
    "Portuguese": {
        "copy-txt": "Clique em um número para copiá-lo.",
        "disclaimer": "Se está tendo problemas com a Ferramenta De Formatação de Número de Telefone (BR ou CA/EUA), tente usar um formato de número definido nos exemplos.",
        "num-br-prefix": "Prefixo Extra no Número (BR)",
        "num-north-prefix": "Prefixo Extra no Número (CA/US)",
        "num-other-prefix": "Prefixo Extra no Número (OTHER)",
        "disclaimer-2":
        `Por favor, não se esqueça de usar um dos dois formatos:\n+xx xxx xxxx-xxxx\n+xxxxxxxxxxxxx
Com o primeiro conjunto de digitos sendo o código do país, o segundo conjunto de digitos sendo o código de área/cidade/estado e o terceiro conjunto de dígitos sendo o número de telefone.
Comatível com qualquer país, incluíndo o Brasil, o Canada e os Estados Unidos da America (EUA / EU).
`,
        "num2-text": "Código de País",
        "num3-text": "Código de Área",
        "num4-text": "Número de Telefone",
        "num5-text": "Súfixo Extra no Número",
        "update": function() {
            document.getElementById("copy-txt").textContent = this["copy-tt"];
            document.getElementById("disclaimer").textContent = this["disclaimer"];
            document.getElementById("disclaimer-2").textContent = this["disclaimer-2"];
            document.getElementById("num-br-prefix-text").textContent = this["num-br-prefix"];
            document.getElementById("num-north-prefix-text").textContent = this["num-north-prefix"];
            document.getElementById("num-other-prefix-text").textContent = this["num-other-prefix"];
            document.getElementById("num2-text").textContent = this["num2-text"];
            document.getElementById("num3-text").textContent = this["num3-text"];
            document.getElementById("num4-text").textContent = this["num4-text"];
            document.getElementById("num5-text").textContent = this["num5-text"];
        }
    }
}

var ctrl2 = 1
document.addEventListener('keydown', function(event) {
    let kPRess = event.key.toLowerCase();
    setTimeout(massUpdate, 100);
    if (event.key.toLowerCase() == "escape" && ctrl2 == 0) {
        ctrl2 = 1;
        setTimeout(function() {ctrl2 = 0}, 1000);
    }
    else if (event.key.toLowerCase() == "escape" && ctrl2 == 1) {
        window.open("./index.html", "_self");
    }
});

document.addEventListener('click', function(event) {
    massUpdate();
})

function massUpdate() {
    let brazil = `${document.getElementById("num-br").value}`;
    let numberfiedBrazil = brazil.replaceAll(" ", "");
    let parBrazil = `+${brazil.substring(0,2)} (${brazil.substring(2,4)}) ${brazil.substring(4)}`;
    parBrazil = parBrazil.replaceAll("++", "+");
    parBrazil = parBrazil.slice(0, -4) + "-" + parBrazil.slice(-4);
    parBrazil = parBrazil.replaceAll("--", "-");
    document.getElementById("br-number-par").textContent = `${document.getElementById("num-br-prefix").value}${parBrazil}`;
    document.getElementById("br-number-nospace-1").textContent = `${document.getElementById("num-br-prefix").value}${numberfiedBrazil}`;
    numberfiedBrazil = numberfiedBrazil.replaceAll("+", "");
    numberfiedBrazil = numberfiedBrazil.replaceAll("(", "");
    numberfiedBrazil = numberfiedBrazil.replaceAll(")", "");
    numberfiedBrazil = numberfiedBrazil.replaceAll("-", "");
    document.getElementById("br-number-nospace-2").textContent = `${document.getElementById("num-br-prefix").value}${numberfiedBrazil}`;

    let northAmerica = `${document.getElementById("num-north").value}`;
    let numberfiedNorth = northAmerica.replaceAll(" ", "");
    let parNorth = `+${northAmerica.substring(0,1)} (${northAmerica.substring(1,4)}) ${northAmerica.substring(4)}`;
    parNorth = parNorth.replaceAll("++", "+");
    parNorth = parNorth.slice(0, -4) + "-" + parNorth.slice(-4);
    parNorth = parNorth.replaceAll("--", "-");
    // parNorth = parNorth.replaceAll("((", "(");
    // parNorth = parNorth.replaceAll("))", ")")
    // parNorth = parNorth.replaceAll("++", "+")
    document.getElementById("north-number-par").textContent = `${document.getElementById("num-north-prefix").value}${parNorth}`;
    document.getElementById("north-number-nospace-1").textContent = `${document.getElementById("num-north-prefix").value}${numberfiedNorth}`;
    numberfiedNorth = numberfiedNorth.replaceAll("+", "");
    numberfiedNorth = numberfiedNorth.replaceAll("(", "");
    numberfiedNorth = numberfiedNorth.replaceAll(")", "");
    numberfiedNorth = numberfiedNorth.replaceAll("-", "");
    document.getElementById("north-number-nospace-2").textContent = `${document.getElementById("num-north-prefix").value}${numberfiedNorth}`;
    
    let other = `${document.getElementById("num-other-prefix").value}+${document.getElementById("num2").value} (${document.getElementById("num3").value}) ${document.getElementById("num4").value}`;
    console.log(brazil);
    console.log(northAmerica);
    console.log(other);

    let numberfiedOther = other.replaceAll(" ", "")
    document.getElementById("other-number-detail").textContent = other;
    document.getElementById("other-number-no-space-1").textContent = numberfiedOther;
    numberfiedOther = numberfiedOther.replaceAll("+", "");
    numberfiedOther = numberfiedOther.replaceAll("(", "");
    numberfiedOther = numberfiedOther.replaceAll(")", "");
    numberfiedOther = numberfiedOther.replaceAll("-", "");
    let parOther = other.replaceAll("++", "+");
    parOther = parOther.slice(0, -4) + "-" + parOther.slice(-4);
    parOther = parOther.replaceAll("--", "-");
    document.getElementById("other-number-par").textContent = parOther;
    document.getElementById("other-number-no-space-2").textContent = numberfiedOther;
}

function copyNumber(number) {
    switch (number) {
        case "b1":
            navigator.clipboard.writeText(document.getElementById(`br-number-par`).textContent);
            document.getElementById(`br-number-par`).style.color = "#00ff00";
            setTimeout(`document.getElementById("br-number-par").style.color = "${Page.fontColor}";`, 1000);
            break;
        case "b2":
            navigator.clipboard.writeText(document.getElementById(`br-number-nospace-1`).textContent);
            document.getElementById(`br-number-nospace-1`).style.color = "#00ff00";
            setTimeout(`document.getElementById("br-number-nospace-1").style.color = "${Page.fontColor}";`, 1000);
            break;
        case "b3":
            navigator.clipboard.writeText(document.getElementById(`br-number-nospace-2`).textContent);
            document.getElementById(`br-number-nospace-2`).style.color = "#00ff00";
            setTimeout(`document.getElementById("br-number-nospace-2").style.color = "${Page.fontColor}";`, 1000);
            break;
        case "n1":
            navigator.clipboard.writeText(document.getElementById(`north-number-par`).textContent);
            document.getElementById(`north-number-par`).style.color = "#00ff00";
            setTimeout(`document.getElementById("north-number-par").style.color = "${Page.fontColor}";`, 1000);
            break;
        case "n2":
            navigator.clipboard.writeText(document.getElementById(`north-number-nospace-1`).textContent);
            document.getElementById(`north-number-nospace-1`).style.color = "#00ff00";
            setTimeout(`document.getElementById("north-number-nospace-1").style.color = "${Page.fontColor}";`, 1000);
            break;
        case "n3":
            navigator.clipboard.writeText(document.getElementById(`north-number-nospace-2`).textContent);
            document.getElementById(`north-number-nospace-2`).style.color = "#00ff00";
            setTimeout(`document.getElementById("north-number-nospace-2").style.color = "${Page.fontColor}";`, 1000);
            break;
        case "o1":
            navigator.clipboard.writeText(document.getElementById(`other-number-detail`).textContent);
            document.getElementById(`other-number-detail`).style.color = "#00ff00";
            setTimeout(`document.getElementById("other-number-detail").style.color = "${Page.fontColor}";`, 1000);
            break;
        case "o2":
            navigator.clipboard.writeText(document.getElementById(`other-number-no-space-1`).textContent);
            document.getElementById(`other-number-no-space-1`).style.color = "#00ff00";
            setTimeout(`document.getElementById("other-number-no-space-1").style.color = "${Page.fontColor}";`, 1000);
            break;
        case "o3":
            navigator.clipboard.writeText(document.getElementById(`other-number-no-space-2`).textContent);
            document.getElementById(`other-number-no-space-2`).style.color = "#00ff00";
            setTimeout(`document.getElementById("other-number-no-space-2").style.color = "${Page.fontColor}";`, 1000);
            break;
    }
}
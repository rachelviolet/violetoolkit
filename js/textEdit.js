'use strict'
let oldValue;

var Languages = {
    "English": {
        "label": "Text to Edit",
        "copy": "Copy",
        "clear": "Clear",
        "undo": "Undo",
        "low": "Lowercase",
        "upp": "Uppercase",
        "ast": "Cover with asterisks",
        "as3": "Cover with three asterisks",
        "asx": "Cover with three asterisks and uppercase",
        "und": "Cover with underscores",
        "til": "Cover with tildes",
        "quo": "Cover with quotation marks",
        "par": "Cover with parentheses",
        "bra": "Cover with brackets",
        "chat": "Text formatting tips",
        update: function() {
            document.getElementById("text-l").textContent = Languages.English.label;
            document.getElementById("tx-clear").textContent = Languages.English.clear;
            document.getElementById("copy").textContent = Languages.English.copy;
            document.getElementById("tx-undo").textContent = Languages.English.undo;
            document.getElementById("tx-lowercase").textContent = Languages.English.low;
            document.getElementById("tx-uppercase").textContent = Languages.English.upp;
            document.getElementById("tx-surround-ast").textContent = Languages.English.ast;
            document.getElementById("tx-surround-und").textContent = Languages.English.und;
            document.getElementById("tx-surround-til").textContent = Languages.English.til;
            document.getElementById("tx-surround-quo").textContent = Languages.English.quo;
            document.getElementById("tx-surround-par").textContent = Languages.English.par;
            document.getElementById("tx-surround-bra").textContent = Languages.English.bra;
            document.getElementById("tx-surround-as3").textContent = Languages.English.as3;
            document.getElementById("tx-surround-asx").textContent = Languages.English.asx;
            document.getElementById("text-format").textContent = Languages.English.chat;
        },
    },
    "Portuguese": {
        "label": "Texto para editar",
        "copy": "Copiar",
        "clear": "Limpar",
        "undo": "Desfazer",
        "low": "Caixa baixa",
        "upp": "Caixa alta",
        "ast": "Cobrir com asteriscos",
        "as3": "Cobrir com três asteriscos",
        "as3": "Cobrir com três asteriscos e caixa alta",
        "und": "Cobrir com subtraços",
        "til": "Cobrir com tis",
        "quo": "Cobrir com aspas duplas",
        "par": "Cobrir com parênteses",
        "bra": "Cobrir com colchetes",
        "chat": "Dicas para formatação de texto",
        update: function() {
            document.getElementById("text-l").textContent = Languages.Portuguese.label;
            document.getElementById("copy").textContent = Languages.Portuguese.copy;
            document.getElementById("tx-clear").textContent = Languages.Portuguese.clear;
            document.getElementById("tx-undo").textContent = Languages.Portuguese.undo;
            document.getElementById("tx-lowercase").textContent = Languages.Portuguese.low;
            document.getElementById("tx-uppercase").textContent = Languages.Portuguese.upp;
            document.getElementById("tx-surround-ast").textContent = Languages.Portuguese.ast;
            document.getElementById("tx-surround-und").textContent = Languages.Portuguese.und;
            document.getElementById("tx-surround-til").textContent = Languages.Portuguese.til;
            document.getElementById("tx-surround-quo").textContent = Languages.Portuguese.quo;
            document.getElementById("tx-surround-par").textContent = Languages.Portuguese.par;
            document.getElementById("tx-surround-bra").textContent = Languages.Portuguese.bra;
            document.getElementById("tx-surround-as3").textContent = Languages.Portuguese.as3;
            document.getElementById("tx-surround-asx").textContent = Languages.Portuguese.asx;
            document.getElementById("text-format").textContent = Languages.Portuguese.chat;
        },
    }
}

function textAlter(alt) {
    let finalRes = document.getElementById("text").value;
    oldValue = finalRes;
    switch (alt) {
        default:
            console.error("Cannot edit text: Incorrect format.");
            return;
        case 1:
            document.getElementById("text").value =  finalRes.toLowerCase();
            break;
        case 2:
            document.getElementById("text").value = finalRes.toUpperCase();
            break;
        case 3:
            document.getElementById("text").value = `*${finalRes}*`;
            break;
        case 4:
            document.getElementById("text").value = `_${finalRes}_`;
            break;
        case 5:
            document.getElementById("text").value = `~${finalRes}~`;
            break;
        case 6:
            document.getElementById("text").value = `"${finalRes}"`;
            break;
        case 7:
            document.getElementById("text").value = `(${finalRes})`;
            break;
        case 8:
            document.getElementById("text").value = `[${finalRes}]`;
            break;
        case 9:
            document.getElementById("text").value = `***${finalRes}***`;
            break;
        case 10:
            document.getElementById("text").value = `***${finalRes.toUpperCase()}***`;
            break;
        case 11:
            navigator.clipboard.writeText(document.getElementById("text").value);
            break;
    }
}

function clearText() {
    document.getElementById("text").value = "";
}

function undoText() {
    document.getElementById("text").value = oldValue;
}
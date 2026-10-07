'use strict'

var existingElements = [];

function element(id) {
    document.getElementById(id);
}

function objectLength(object) {
    return Object.keys(object).length;
}

function changeText(id, value) {
    document.getElementById(id).textContent = value;
}

function changeStyle(id, style, value) {
    document.getElementById(id).style[style] = value;
}

function changeStyleClass(classid, style, value) {
    return; // TODO
}

function modifyElement(id, data, value) {
    document.getElementById(id).setAttribute(data, value);
}

function createElement(type, text, id, onto) {
    if (id == undefined) {
        id = `element-${type}-${Math.floor(Math.random() * 5000)}`;
    }
    if (existingElements.includes(id)) {
        console.error("ID already exists!");
        return;
    }
    existingElements.push(id);
    console.log(`Creating ${type} (ID: ${id}) with text "${text}" onto ${onto}`);
    let toCreate;
    switch (type) {
        case "button":
        case "p":
        case "input":
        case "h1":
        case "h2":
        case "img":
        case "div":
        default:
            toCreate = type;
            break;
        case "text":
        case "paragraph":
            toCreate = "p";
            break;
        case "title":
            toCreate = "h1";
            break;
        case "image":
        case "picture":
            toCreate = "img";
            break;
        case "line break":
            toCreate = "br";
            break;
        case "horizontal line":
            toCreate = "hr";
            break;
    }
    let elementVar = document.createElement(toCreate);
    elementVar.id = id;
    elementVar.textContent = text;
    if (onto == undefined) {
        document.body.appendChild(elementVar);
    }
    else {
        element(onto).appendChild(elementVar);
    }
}
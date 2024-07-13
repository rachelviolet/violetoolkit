function landscapeLoading() {
    document.getElementById("short-a").style.display = "inline";
    document.getElementById("short-b").style.display = "inline";
    document.getElementById("short-c").style.display = "inline";

    document.getElementById("screen").style.top = `${percenter("y", 6)}px`;
    document.getElementById("screen").style.width = `${percenter("x", 95)}px`;
    document.getElementById("screen").style.height = `${percenter("y", 85)}px`;

    document.getElementById("top-left").style.top = `${percenter("y", 0.05)}px`;
    document.getElementById("top-left").style.left = `${percenter("x", 2.5)}px`;

    document.getElementById("titlev").style.fontSize = `${percenter("x", 1)}px`;

    document.getElementById("top-right").style.top = `${percenter("y", 0.05)}px`;
    document.getElementById("top-right").style.right = `${percenter("x", 1.1)}px`;
    
    document.getElementById("bottom-left").style.bottom = `${percenter("y", 0.5)}px`;
    document.getElementById("bottom-left").style.left = `${percenter("x", 1.1)}px`;

    document.getElementById("bottom-right").style.display = "inline";
    document.getElementById("bottom-right").style.bottom = `${percenter("y", 0.5)}px`;
    document.getElementById("bottom-right").style.right = `${percenter("x", 1.1)}px`;

    for(var i = 0; i < document.getElementById("bottom-left").children.length; i++) {
        document.getElementById("bottom-left").children[i].style.paddingRight = `${percenter("x", 0.4)}px`;
    }
    for(var i = 0; i < document.getElementById("bottom-right").children.length; i++) {
        document.getElementById("bottom-right").children[i].style.paddingRight = `${percenter("x", 0.4)}px`;
    }
    for(var i = 0; i < document.getElementsByClassName("screen-title").length; i++) {
        document.getElementsByClassName("screen-title")[i].style.fontSize = `${percenter("x", 5)}px`;
    }
    for(var i = 0; i < document.getElementsByClassName("top").length; i++) {
        document.getElementsByClassName("top")[i].style.top = `${percenter("y", 0.05)}px`;
        document.getElementsByClassName("top")[i].style.fontSize = `${percenter("x", 1.5)}px`;
    }
    for(var i = 0; i < document.getElementsByClassName("bottom").length; i++) {
        document.getElementsByClassName("bottom")[i].style.bottom = `${percenter("y", 0.05)}px`;
        document.getElementsByClassName("bottom")[i].style.fontSize = `${percenter("x", 1.5)}px`;
    }

    document.getElementById("tl1-text").style.minWidth = `${percenter("x", 60)}px`;
    document.getElementById("tl1-text").style.minHeight = `${percenter("y", 20)}px`;
    document.getElementById("tl1-text").style.maxWidth = `${percenter("x", 80)}px`;
    document.getElementById("tl1-text").style.maxHeight = `${percenter("y", 25)}px`;
}
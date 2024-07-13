'use strict'
var charCount = {
    "full": 0,
    "space0": 0,
    "space1": 0,
    "count": function () {
        let text = document.getElementById("tl1-text").value;
        this.full = text.length;

        let textSpace1 = text.match(/ /g);
        try {this.space1 = textSpace1.length}
        catch (error) {this.space1 = 0}

        let textSpace0 = text.replace(/ /g, '');
        if (this.space1 > 0) this.space0 = textSpace0.length;
        else this.space0 = this.full;

        if (this.full <= 0) this.space1 = 0;
        
        if (debugMode) console.log(text);
        if (debugMode) console.log(textSpace0);
        if (debugMode) console.log(textSpace1);
        if (debugMode) console.log(this.full);
        if (debugMode) console.log(this.space0);
        if (debugMode) console.log(this.space1);
        langSet();
    }
}
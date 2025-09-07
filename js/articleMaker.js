'use strict'

var Languages = {
    "English": {
        "title": "Title",
        "content": "Content",
        "author": "Author",
        "description": "Description",
        "keywords": "Keywords",
        "create": "Create article",
        "date": "Date",
        update: function() {
            document.title = "Ferramenta Violeta - Article Creator";
            document.getElementById("label-1").textContent = Languages.English.title;
            document.getElementById("label-2").textContent = Languages.English.content;
            document.getElementById("label-3").textContent = Languages.English.author;
            document.getElementById("label-4").textContent = Languages.English.description;
            document.getElementById("label-5").textContent = Languages.English.keywords;
            document.getElementById("label-6").textContent = Languages.English.date;
            document.getElementById("create").textContent = Languages.English.create;
        }
    },
    "Portuguese": {
        "title": "Título",
        "content": "Conteúdo",
        "author": "Autor(a)",
        "description": "Descrição",
        "keywords": "Palavras-chave",
        "create": "Criar artigo",
        "date": "Data",
        update: function() {
            document.title = "Ferramenta Violeta - Criador de artigo";
            document.getElementById("label-1").textContent = Languages.Portuguese.title;
            document.getElementById("label-2").textContent = Languages.Portuguese.content;
            document.getElementById("label-3").textContent = Languages.Portuguese.author;
            document.getElementById("label-4").textContent = Languages.Portuguese.description;
            document.getElementById("label-5").textContent = Languages.Portuguese.keywords;
            document.getElementById("label-6").textContent = Languages.Portuguese.date;
            document.getElementById("create").textContent = Languages.Portuguese.create;
        }
    }
}

const BASEHTML =
`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="[AUTHOR]">
        <meta name="description" content="[DESCRIPTION]">
        <meta name="keywords" content="[KEYWORDS]">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>[TITLE]</title>

        <link rel="icon" type="image/x-icon" href="../favicon.png">
        <style>
            @font-face {
                font-family: 'OpenSans';
                src: url("../font/open-sans.ttf");
            }
            #back, #top {
                border: 0.5px solid #cf9fff;
                color: #2A002A;
                text-decoration: none;
            }

            #back {
                text-align: center;
                padding: 0;
                margin: 0;
                display: block;
                opacity: 85%;
            }
            #top {
                position: fixed;
                bottom: 2%;
                right: 2%;
                opacity: 75%;
            }
            body {
                background-color: #fafafa;
                font-family: 'OpenSans', 'VT323'
            }

            a {width: fit-content;}

            p, a, li {
                font-size: 120% !important;
                margin: 0%;
                white-space: break-spaces;
            }
            span {font-size: 50%;}

            hr {
                border-bottom: 100% solid #101010;
            }

            .tbcont {display: block;}

            .boldme {
                font-size: 120%;
                font-weight: bold;
            }
        </style>
        
        <script src="../js/theme.js"></script>
        <script src="../js/ui.js"></script>
        <script src="../js/toolsetTheme.js"></script>
    </head>
    <body onload="themeSet()">
        <a id="back" href="./index.html">&#8962;(ESC)HOME</a>
        <h1>[TITLE]</h1>
        <p>[DATE]</p>
        <p>[CONTENT]</p>
    </body>
</html>
`;

function writeArticle() {
    let fullCode = BASEHTML.replaceAll("[TITLE]", document.getElementById("text-1").value);
    fullCode = fullCode.replaceAll("[CONTENT]", document.getElementById("text-2").value);
    fullCode = fullCode.replaceAll("[AUTHOR]", document.getElementById("text-3").value);
    fullCode = fullCode.replaceAll("[DESCRIPTION]", document.getElementById("text-4").value);
    fullCode = fullCode.replaceAll("[KEYWORDS]", document.getElementById("text-5").value);
    fullCode = fullCode.replaceAll("[DATE]", document.getElementById("text-6").value);
    document.getElementById("code").textContent = fullCode;
}
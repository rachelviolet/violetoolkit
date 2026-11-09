'use strict'

const article = new URLSearchParams(window.location.search).get('go')

const articles = {
    "type": "module",
    "2025-cybersecurity-modern-threats-english": {
        "eng": "./en/2025-cybersecurity-modern-threats-english.html",
        "engTitle": "[INFORMATION] Modern Cybersecurity Threats",
        "por": "./pt/2025-ameacas-ciberneticas-portugues-brasil.html",
        "porTitle": "[INFORMAÇÃO] Ameaças Cibernéticas Modernas",
        "esp": "./es/2025-ciberseguridad-amenazas-modernas-espanol.html",
        "espTitle": "[INFORMACIÓN] Las amenazas modernas de ciberseguridad y cómo defenderse de ellas"
    },
    "2026-09-06-good-ai-prompting": {
        "eng": "./en/2026-09-06-good-ai-prompting.html",
        "engTitle": "Good AI prompting",
        "por": "./pt/2026-09-06-bom-prompt-de-ia.html",
        "porTitle": "Bom prompt de IA",
        "esp": "./es/2026-09-06-buen-prompt-de-ia.html",
        "espTitle": "Un buen prompt de IA"
    },
    "2026-09-10-emotional-intelligence": {
        "eng": "./en/2026-09-10-emotional-intelligence.html",
        "engTitle": "Emotional Intelligence",
        "por": "./pt/2026-09-10-inteligencia-emocional.html",
        "porTitle": "Inteligência Emocional",
        "esp": "./es/2026-09-10-inteligencia-emocional.html",
        "espTitle": "Inteligencia emocional"
    },
    "2026-09-10-network-down": {
        "eng": "./en/2026-09-10-network-down.html",
        "engTitle": "Network Down?",
        "por": "./pt/2026-09-10-rede-caiu.html",
        "porTitle": "A rede caiu?",
        "esp": "./es/2026-09-10-red-cayo.html",
        "espTitle": "¿Se cayó la red?"
    },
    "2026-09-15-berlin-hack": {
        "eng": "./en/2026-09-15-berlin-hack.html",
        "engTitle": "Berlin Hacked!",
        "por": "./pt/2026-09-15-berlin-hack.html",
        "porTitle": "Berlin Hackeada!",
        "esp": "./es/2026-09-15-berlin-hack.html",
        "espTitle": "¡Berlin Hackeada!"
    },
    "2026-10-07-pdf-tool": {
        "eng": "./en/2026-10-07-pdf-tool.html",
        "engTitle": "PDF - simple web tool",
        "por": "./pt/2026-10-07-ferramenta-pdf.html",
        "porTitle": "PDF - ferramenta na web simples",
        "esp": "./es/2026-10-07-herramienta-pdf.html",
        "espTitle": "PDF - herramienta web sencilla"
    },
    "2026-10-10-unlock-gemini": {
        "eng": "./en/2026-10-10-unlock-gemini.html",
        "engTitle": "Unlock Gemini - Google Chrome Flags",
        "por": "./pt/2026-10-10-gemini-desbloqueio.html",
        "porTitle": "Desbloqueie o Gemini - Google Chrome Flags",
        "esp": "./es/2026-10-10-gemini-desbloqueo.html",
        "espTitle": "Desbloquee el Gemini - Google Chrome Flags"
    },
    "2026-10-18-cybersec-1": {
        "eng": "./en/2026-10-18-cybersec-1.html",
        "engTitle": "Learning cybersec 1",
        "por": "./pt/2026-10-18-cybersec-1.html",
        "porTitle": "Aprendendo cibersegurança 1",
        "esp": "./es/2026-10-18-cybersec-1.html",
        "espTitle": "Aprendiendo ciberseguridad 1"
    },
    "2026-10-19-cybersec-2": {
        "eng": "./en/2026-10-19-cybersec-2.html",
        "engTitle": "Learning cybersec 2 - WORM",
        "por": "./pt/2026-10-19-cybersec-2.html",
        "porTitle": "Aprendendo cibersegurança 2 - WORM",
        "esp": "./es/2026-10-18-cybersec-2.html",
        "espTitle": "Aprendiendo ciberseguridad 2 - WORM"
    },
    "2026-10-20-ai-attacks": {
        "eng": "./en/2026-10-20-ai-attacks.html",
        "engTitle": "How you can defend yourself from these cybersecurity threats",
        "por": "./pt/2026-10-20-ataques-ia.html",
        "porTitle": "Como você pode se defender dessas ameaças cibernéticas",
        "esp": "./es/2026-10-20-ataques-ia.html",
        "espTitle": "Así puedes defenderte de estas amenazas de ciberseguridad"
    },
    "2026-10-24-outdated-microsoft-office": {
        "eng": "./en/2026-10-24-outdated-microsoft-office.html",
        "engTitle": "Statistics: Outdated Microsoft Office",
        "por": "./pt/2026-10-24-microsoft-office-desatualizado.html",
        "porTitle": "Estatísticas: Microsoft Office desatualizado",
        "esp": "./es/2026-10-24-microsoft-office-desactualizado.html",
        "espTitle": "Estadísticas: Microsoft Office desactualizado"
    },
    "artificial-general-intelligence": {
        "eng": "./en/artificial-general-intelligence.html",
        "engTitle": "[INFORMATION] What Is Artificial General Intelligence?",
        "por": "./pt/inteligencia-artificial-geral.html",
        "porTitle": "[INFORMAÇÃO] O Que É Inteligência Artificial Geral",
        "esp": "./es/inteligencia-artificial-general.html",
        "espTitle": "[INFORMACIÓN] ¿Que és la Inteligencia Artificial general?"
    },
    "bug-fixes": {
        "eng": "./en/bug-fixes.html",
        "engTitle": "[INFORMATION] What Are Computer Bugs?",
        "por": "./pt/o-que-sao-bugs-de-computadores.html",
        "porTitle": "[INFORMAÇÃO] O Que São Bugs de Computadores",
        "esp": "./es/que-son-los-bugs-informaticos.html",
        "espTitle": "[INFORMACIÓN] Que Son Los Bugs Informáticos"
    },
    "computer-virus-and-antivirus-software": {
        "eng": "./en/computer-virus-and-antivirus-software.html",
        "engTitle": "[INFORMATION] Computer Viruses and Antivirus Software",
        "por": "./pt/virus-de-computador-e-software-de-antivirus.html",
        "porTitle": "[INFORMAÇÃO] Vírus de Computador e Software de Antivírus",
        "esp": "./es/virus-informaticos-y-software-antivirus.html",
        "espTitle": "[INFORMACIÓN] Virus Informáticos y Software Antivirus"
    },
    "file-exensions-you-need-to-know-about": {
        "eng": "./en/file-exensions-you-need-to-know-about.html",
        "engTitle": "[INFORMATION] File Extensions You NEED To Know About",
        "por": "./pt/extensoes-de-arquivo-que-voce-precisa-conhecer.html",
        "porTitle": "[INFORMAÇÃO] Extensões de Arquivos que Você Precisa Conhecer",
        "esp": "./es/extensiones-de-archivos-que-tienes-que-saber.html",
        "espTitle": "[INFORMACIÓN] Extensiones de archivo que tienes que saber"
    },
    "how-to-appropriately-turn-your-device-off": {
        "eng": "./en/how-to-appropriately-turn-your-device-off.html",
        "engTitle": "[INFORMATION] How To Appropriately Turn Your Device Off",
        "por": "./pt/como-corretamente-desligar-seu-dispositivo.html",
        "porTitle": "[INFORMAÇÃO] Como Corretamente Desligar Seu Dispositivo?",
        "esp": "./es/como-apagar-adecuadamente-su-dispositivo.html",
        "espTitle": "[INFORMACIÓN] Cómo Apagar Adecuadamente su Dispositivo"
    },
    "how-to-live-a-happy-life": {
        "eng": "./en/how-to-live-a-happy-life.html",
        "engTitle": "[SUGGESTION] 12 things to make 2025 a great year",
        "por": "./pt/como-viver-uma-vida-feliz.html",
        "porTitle": "[SUGESTÃO] 12 coisas para fazer de 2025 um ótimo ano:",
        "esp": "./es/como-vivir-una-vida-feliz.html",
        "espTitle": "[SUGERENCIA] 12 cosas para hacer del 2025 un gran año:"
    },
    "how-to-prevent-your-computer-laptop-phone-from-overheating": {
        "eng": "./en/how-to-prevent-your-computer-laptop-phone-from-overheating.html",
        "engTitle": "[INFORMATION] How To Prevent Your Computer Or Laptop From Overheating",
        "por": "./pt/como-prevenir-seu-computador-notebook-celular-de-superaquecer.html",
        "porTitle": "[INFORMAÇÃO] Como Previnir Seu Computador ou Notebook de Superaquecer",
        "esp": "./es/como-evitar-que-su-computadora-o-computadora-portatil-se-sobrecaliente.html",
        "espTitle": "[INFORMACIÓN] Cómo Evitar Que Su Computadora O Computadora Portátil Se Sobrecaliente"
    },
    "microsoft-teams-ransomware-jan2024-english": {
        "eng": "./en/microsoft-teams-ransomware-jan2024-english.html",
        "engTitle": "[NEWS] (Jan 24, 2024) Attackers use Microsoft Teams to target victims.",
        "por": "./pt/microsoft-teams-ransomware-jan2024-portuguese.html",
        "porTitle": "[NOTÍCIAS] (24 Jan, 2024) Hackers utilizam o Microsoft Teams para atacar vítimas.",
        "esp": "./es/los-atacantes-usan-microsoft-teams-para-atacar-a-las-victimas.html",
        "espTitle": "[NOTÍCIAS] (24 ene., 2024) Los atacantes usan equipos de Microsoft para atacar a las víctimas."
    },
    "ms-office-365-free": {
        "eng": "./en/ms-office-365-free.html",
        "engTitle": "[INFORMATION] The Microsoft 365 Suite and how to get it for free",
        "por": "./pt/ms-office-365-gratis.html",
        "porTitle": "[INFORMAÇÃO] O Pacote Microsoft Office e como conseguí-lo gratuitamente",
        "esp": "./es/ms-office-365-gratis.html",
        "espTitle": "[INFORMACIÓN] Aplicaciones de Microsoft Office y cómo utilizarlas de forma gratuita."
    },
    "never-get-scammed": {
        "eng": "./en/never-get-scammed.html",
        "engTitle": "[INFORMATION] How To Never Get Scammed, Hacked or Infected With A Computer Virus?",
        "por": "./pt/nunca-caia-em-golpes.html",
        "porTitle": "[INFORMAÇÃO] Como Nunca Cair Em Golpes, Ter Sua Conta Hackeada Ou O Computador Infectado Com Um Vírus?",
        "esp": "./es/nunca-sea-estafado.html",
        "espTitle": "[INFORMACIÓN] ¿Cómo nunca ser estafado, hackeado o infectado con un virus informático?"
    },
    "specs-info": {
        "eng": "./en/specs-info.html",
        "engTitle": "[SUGGESTION] How to choose a computer, laptop or phone? Which specifications to look out for?",
        "por": "./pt/specs-info.html",
        "porTitle": "[SUGESTÃO] Como escolher um computador, notebook ou celular? Quais especificações devo prestar atenção?",
        "esp": "./es/que-son-los-requisitos-de-hardware.html",
        "espTitle": "[SUGERENCIA] ¿Cómo elegir una computadora, la portátil o teléfono?"
    },
    "what-are-active-directories": {
        "eng": "./en/what-are-active-directories.html",
        "engTitle": "[INFORMATION] What are active directories?",
        "por": "./pt/o-que-sao-requisitos-de-hardware.html",
        "porTitle": "[INFORMAÇÃO] O que são Active Directories (diretórios ativos)?",
        "esp": "./es/que-son-active-directories.html",
        "espTitle": "[INFORMACIÓN] ¿Qué son los Active Directories? Forests? Trees?"
    },
    "what-are-hardware-requirements": {
        "eng": "./en/what-are-hardware-requirements.html",
        "engTitle": "[INFORMATION] What Are Hardware Requirements?",
        "por": "./pt/o-que-sao-requisitos-de-hardware.html",
        "porTitle": "[INFORMAÇÃO] O Que São Requisitos de Hardware",
        "esp": "./es/que-son-los-requisitos-de-hardware.html",
        "espTitle": "[INFORMACIÓN] ¿Que Son Los Requisitos de Hardware?"
    },
    // "what-is-artificial-general-intelligence": {
    //     "eng": "./en/what-is-artificial-general-intelligence.html",
    //     "engTitle": "",
    //     "por": "./pt/inteligencia-artificial-geral.html",
    //     "porTitle": "",
    //     "esp": "./es/inteligencia-artificial-general.html",
    //     "espTitle": ""
    // },
    "what-is-a-vpn": {
        "eng": "./en/what-is-a-vpn.html",
        "engTitle": "[INFORMATION] What Is A VPN? (Virtual Private Network)",
        "por": "./pt/o-que-e-uma-vpn.html",
        "porTitle": "[INFORMAÇÃO] O Que É Uma VPN?",
        "esp": "./es/que-es-una-vpn.html",
        "espTitle": "[INFORMACIÓN] Qué es una VPN? (Virtual Private Network, Red Virtual Privada)"
    },
    "what-is-lgpd-br": {
        "eng": "./en/what-is-lgpd-br.html",
        "engTitle": "[INFORMATION] What is the LGPD? (Brazilian law)",
        "por": "./pt/o-que-e-a-lgpd.html",
        "porTitle": "[INFORMAÇÃO] O que é a LGPD? Lei Geral de Proteção de Dados Pessoais",
        "esp": "./es/que-es-la-lgpd.html",
        "espTitle": "[INFORMACIÓN] (Ley brasileña) ¿Qué es el Lei Geral de Proteção de Dados Pessoais (LGPD)?"
    },
    "why-should-i-restart-my-computer": {
        "eng": "./en/why-should-i-restart-my-computer.html",
        "engTitle": "[INFORMATION] Why Should I Restart My Computer?",
        "por": "./pt/por-que-devo-reiniciar-meu-computador.html",
        "porTitle": "[INFORMAÇÃO] Por Que Devo Reiniciar Meu Computador?",
        "esp": "./es/por-que-deberia-reiniciar-mi-computadora.html",
        "espTitle": "[INFORMACIÓN] ¿Por Qué Debería Reiniciar Mi Computadora?"
    },
    "why-update-your-device-app": {
        "eng": "./en/why-update-your-device-app.html",
        "engTitle": "[INFORMATION] Why Should I Update My Device/Apps?",
        "por": "./pt/por-que-devo-atualizar-meu-dispositivo-aplicativos.html",
        "porTitle": "[INFORMAÇÃO] Por Que Devo Atualizar Meu Dispositivo/Aplicativos?",
        "esp": "./es/por-que-deberia-actualizar-mi-dispositivo-aplicaciones.html",
        "espTitle": "[INFORMACIÓN] ¿Por Qué Debería Actualizar Mi Dispositivo/Aplicaciones?"
    }
};

function articleDisplayName() {
    if (article in articles) {
        document.getElementById("eng").innerText = `I want to read ${articles[article]["engTitle"]} in English`;
        document.getElementById("eng").setAttribute("href", articles[article]["eng"]);
        document.getElementById("d-eng").setAttribute("onclick", `window.open("${articles[article]["eng"]}", "_self");`);
        document.getElementById("por").innerText = `Eu quero ler ${articles[article]["porTitle"]} em português`;
        document.getElementById("por").setAttribute("href", articles[article]["por"]);
        document.getElementById("d-por").setAttribute("onclick", `window.open("${articles[article]["por"]}", "_self");`);
        document.getElementById("esp").innerText = `Quiero leer ${articles[article]["espTitle"]} en español`;
        document.getElementById("esp").setAttribute("href", articles[article]["esp"]);
        document.getElementById("d-esp").setAttribute("onclick", `window.open("${articles[article]["esp"]}", "_self");`);
    }
    else {
        document.getElementById("eng").innerText = `Failed to load ${article}`;
        document.getElementById("por").innerText = `Falhou ao carregar ${article}`;
        document.getElementById("esp").innerText = `Fallo al cargar ${article}`;

    }
}

console.log(window.innerWidth)
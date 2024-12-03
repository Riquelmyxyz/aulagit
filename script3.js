let currentLevel = 1;
let score = 0;

const seriesImages = [
    "imagem/logo1.webp",
    "imagem/logo2.webp",
    "imagem/logo3.webp",
    "imagem/logo4.webp",
    "imagem/logo5.webp",
    "imagem/logo6.webp",
    "imagem/logo7.webp",
    "imagem/logo8.webp",
    "imagem/logo9.webp",
    "imagem/logo10.webp",
    "imagem/logo11.webp",
    "imagem/logo12.webp",
    "imagem/logo13.webp",
    "imagem/logo14.webp",
    // Adicione mais imagens de níveis aqui
];
const seriesNames = [
    "Apple",
    "Domino's",
    "The Rolling Stones",
    "PlayBoy",
    "Sticker.Li",
    "Nirvana",
    "Nestlé",
    "Wikipédia",
    "Chanel",
    "Lufthansa",
    "Amazon",
    "Airbnb",
    "Kibon",
    "Walmart",
    // Adicione mais nomes de séries aqui
]
const optionsPerLevel = [
    ["Samsung", "Motorola", "Apple"],
    ["Domino's", "Fornellone", "Pizza Hut"],
    ["The Rolling Stones", "Pierce the veil", "Black Veils Brides"],
    ["Gucci", "Channel", "PlayBoy"],
    ["Sticker.Li", "WhatSticker.In", "Wemoji"],
    ["Sleeping With Sirens", "Kiss", "Nirvana"],
    ["Nesquick", "Nestlé", "Nescafé"],
    ["E-book", "Brain.Ly", "Wikipédia"],
    ["Airbnb","Gucci", "Chanel"],
    ["Delta", "Flugkraft", "Lufthansa"],
    ["Gol Smiles", "Amazon", "Ebay"],
    ["Travell & CO", "Travellers", "Airbnb"],
    ["Gelato", "Kibon", "Vanilla"],
    ["Walmart", "Carrefour", "Leroy Merlin"],
    // Adicione mais opções de múltipla escolha aqui
];

function loadLevel() {
    document.getElementById("series-image").src = seriesImages[currentLevel - 1];
    document.getElementById("level").innerText = currentLevel;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "Qual o nome desta Marca?";
    optionsPerLevel[currentLevel - 1].forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkGuess(option);
        optionsContainer.appendChild(button);
    });
}

function checkGuess(guess) {
    if (guess === seriesNames[currentLevel - 1]) {
        score += 10;
        currentLevel++;
        document.getElementById("score").innerText = score;
        if (currentLevel <= seriesImages.length) {
            loadLevel();
        } else {
            alert("Parabéns! Você completou todos os níveis.");
            // Reiniciar o jogo ou adicionar lógica adicional aqui
        }
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
}

// Inicialize o jogo
loadLevel();

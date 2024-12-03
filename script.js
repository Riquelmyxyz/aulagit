let currentLevel = 1;
let score = 0;

const seriesImages = [
    "imagem/nivel1.jpg",
    "imagem/nivel2.webp",
    "imagem/nivel3.jpg",
    "imagem/nivel4.webp",
    "imagem/nivel5.png",
    "imagem/nivel6.jpg",
    "imagem/nivel7.jpg",
    "imagem/nivel8.jpeg",
    "imagem/nivel9.jpg",
    "imagem/nivel10.jpg",
    "imagem/nivel11.jpg",
    "imagem/nivel12.webp",
    "imagem/nivel13.jpg",
    "imagem/nivel14.jpg",
    // Adicione mais imagens de níveis aqui
];
const seriesNames = [
    "WandaVision",
    "Stranger Things",
    "Game Of Thrones",
    "Wandinha",
    "La Casa De Papel",
    "Breaking Bad",
    "Agatha Desde Sempre",
    "Monstros - Irmãos Menendez: Assassinos dos Pais",
    "Elite",
    "Dahmer: Um Canibal Americano",
    "Sandman",
    "Hawkeye",
    "O Mundo Sombrio De Sabrina",
    "Grotesquerie",
    // Adicione mais nomes de séries aqui
]
const optionsPerLevel = [
    ["WandaVision", "How I Met Your Mother", "The Office"],
    ["Breaking Bad", "Stranger Things", "Game of Thrones"],
    ["Outer Banks", "Gossip Girl", "Game Of Thrones"],
    ["Brooklyn Nine-Nine", "Wandinha", "Heartstopper"],
    ["La Casa De Papel", "Kilos Mortais", "CSI-Miami"],
    ["Cold Case", "Law and Order", "Breaking Bad"],
    ["Divergente", "Agatha Desde Sempre", "Eu nunca"],
    ["Monstros - Irmãos Menendez: Assassinos dos Pais", "Os Originais", "Falcão E O Soldado Invernal"],
    ["Companheiros De Viagem", "Echo", "Elite"],
    ["Riverdale", "Dahmer: Um Canibal Americano", "Love, Victor"],
    ["KAOS", "Sandman", "Insatiable"],
    ["The Vampire Diaries", "A Mulher Do Diabo", "Hawkeye"],
    ["O Mundo Sombrio De Sabrina", "Pinguim", "Montecristo"],
    ["Garota De Fora", "Grotesquerie", "Kyler XY"],
    // Adicione mais opções de múltipla escolha aqui
];

function loadLevel() {
    document.getElementById("series-image").src = seriesImages[currentLevel - 1];
    document.getElementById("level").innerText = currentLevel;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "Qual o nome dessa série?";
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

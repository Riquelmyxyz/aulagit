let currentLevel = 1;
let score = 0;

const seriesImages = [
    "imagem/level1.webp",
    "imagem/level2.webp",
    "imagem/level3.jpg",
    "imagem/level4.webp",
    "imagem/level5.jpg",
    "imagem/level6.jpg",
    "imagem/level7.jpg",
    "imagem/level8.jpg",
    "imagem/level9.jpeg",
    "imagem/level10.jpg",
    "imagem/level11.jpg",
    "imagem/level12.jpg",
    "imagem/level13.jpg",
    "imagem/level14.jpg",
    // Adicione mais imagens de níveis aqui
];
const seriesNames = [
    "Terrifier",
    "Homem Aranha - Sem Volta Para Casa",
    "Atraves Da Minha Janela",
    "O Iluminado",
    "Até O Último Homem",
    "As Branquelas",
    "VHS 94",
    "Vingadores - Guerra Finita",
    "Lar Das Crianças Peculiares",
    "Doutor Estranho - No Multiverso Da Loucura",
    "Duna",
    "As Crônicas De Nárnia",
    "Harry Potter",
    "Close",
    // Adicione mais nomes de séries aqui
]
const optionsPerLevel = [
    ["Eu Sou A Lenda", "Terrifier", "Panico na neve"],
    ["Homem Aranha - Sem Volta Para Casa", "Homem de ferro 3", "Capitão América"],
    ["Alex Strangerlove", "Atraves Da Minha Janela", "Barraca Do Beijo"],
    ["O Iluminado", "1001 Maniacos", "Pânico na Floresta"],
    ["Até O Último Homem", "Coração de ferro", "O Menino do pijama listrado"],
    ["O diabo Veste Prada", "O pequenino", "As Branquelas"],
    ["O Diabo De Cada Dia", "VHS 94", "Meu pequeno Demonio"],
    ["vingadores - Ultimato", "Vingadores - Era De Ultron", "Vingadores - Guerra Finita"],
    ["Lar Das Crianças Peculiares", "Convensão Das Bruxas", "Interestelar"],
    ["Doutor Destino", "Doutor Estranho", "Doutor Estranho - No Multiverso Da Loucura"],
    ["Duna 2", "Mad Max", "Duna"],
    ["As Crônicas De Nárnia", "Alice No País Das Maravilhas", "Com Amor, Simon"],
    ["Harry Potter", "A Escola Do Bem e o mal", "Senhor Dos Aneis"],
    ["Close", "A Cura", "Meu Primeiro Amor"],
    // Adicione mais opções de múltipla escolha aqui
];

function loadLevel() {
    document.getElementById("series-image").src = seriesImages[currentLevel - 1];
    document.getElementById("level").innerText = currentLevel;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "Qual o nome desse Fime?";
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

const d4 = document.getElementById("D4");
const d6 = document.getElementById("D6");
const d8 = document.getElementById("D8");
const d10 = document.getElementById("D10");
const d12 = document.getElementById("D12");
const d20 = document.getElementById("D20");

const resul = document.getElementById("resul");
const DicedCard = document.getElementById("DicedCard");

function rollDices(sides) {
    const resultado = Math.floor(Math.random() * sides) + 1;

    rollCard(resultado);
}

function rollCard(resultado) {
    const rollBox = document.createElement('article');
    rollBox.setAttribute('class', 'borderFlex');

    const nome = document.createElement('h2');
    nome.textContent = resultado;

    //Coloca o nome/numero no card
    rollBox.append(nome);

        // Remove o card anterior
    DicedCard.replaceChildren();

    // Adiciona o novo card
    DicedCard.append(rollBox);
}

d4.addEventListener("click", () => rollDices(4));
d6.addEventListener("click", () => rollDices(6));
d8.addEventListener("click", () => rollDices(8));
d10.addEventListener("click", () => rollDices(10));
d12.addEventListener("click", () => rollDices(12));
d20.addEventListener("click", () => rollDices(20));
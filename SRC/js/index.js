import { pop } from './pop.js';


const d4 = document.getElementById("D4");
const d6 = document.getElementById("D6");
const d8 = document.getElementById("D8");
const d10 = document.getElementById("D10");
const d12 = document.getElementById("D12");
const d20 = document.getElementById("D20");
const resul = document.getElementById("resul");

function rollDices(sides){
    const resultado = Math.floor(Math.random() * sides) + 1;
    alert(resultado);
}

d4.addEventListener("click", () => rollDices(4));
d6.addEventListener("click", () => rollDices(6));
d8.addEventListener("click", () => rollDices(8));
d10.addEventListener("click", () => rollDices(10));
d12.addEventListener("click", () => rollDices(12));
d20.addEventListener("click", () => rollDices(20));


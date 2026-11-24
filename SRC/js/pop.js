export function rollCard(){
    const rollBox = document.createElement('article');
    rollBox.setAttribute('class', 'borderFlex');

     const nome = document.createElement('h2');
    nome.textContent = (resultado);

     rollBox.append(nome);
     DicedCard.append(rollBox);
}
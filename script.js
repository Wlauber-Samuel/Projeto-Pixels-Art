const container = document.querySelector('.container');

const coresPaleta = document.createElement('div');
coresPaleta.id = 'color-palette';
container.appendChild(coresPaleta);

function divMae() {
    for (let index = 0; index < 4; index += 1) {
        const divMae = document.createElement('div');
        divMae.type = 'color';
        divMae.style.backgroundColor = 'white';
        divMae.style.border = 'solid 1px black';
        divMae.style.borderRadius = '50px';
        divMae.style.width = '50px';
        divMae.style.height = '50px';
        const color = document.getElementById('color-palette')
        divMae.className = 'color';
        color.appendChild(divMae);
    }

}

function coresAleatorias() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
}
    
function paint() {
    const cor = document.querySelectorAll('.color');
    cor[0].style.backgroundColor = 'black';
    for (let index = 1; index < cor.length; index += 1) {
        cor[index].style.backgroundColor = coresAleatorias();

        
    }
}

function aleatorioBtn() {
    const btn = document.getElementById('button-random-color');
    btn.addEventListener('click', paint);
}
divMae();
aleatorioBtn();
paint();

// function createButton() {
//   const getSection = document.querySelector('#color-palette')[0];
//   const getButton = document.createElement('button');
//   getButton.id = 'button-random-color';
//   getButton.innerText = 'Cores Aleatórias';
//   getButton.margin = '30px';
//   getSection.appendChild(getButton);
// }
// function createColors() {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r},${g},${b})`;
// }

// function colorRandom() {

//     const btn = document.querySelector("#button-random-color");
//     btn.addEventListener('click', function () {
//         const getSquares = document.querySelectorAll('.color')

//         for (let index = 1; index < getSquares.length; index += 1) {
//             getSquares[index].style.backgroundColor = createColors();

//         }

//     });
// };
// createButton();
// createColors();
// colorRandom();
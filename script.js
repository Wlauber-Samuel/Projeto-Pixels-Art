const container = document.querySelector('.container');

const coresPaleta = document.createElement('div');
coresPaleta.id = 'color-palette';
container.appendChild(coresPaleta);

function divMae() {
    for (let index = 0; index < 4; index += 1) {
        const divMae = document.createElement('div');
        divMae.style.width = '50px';
        divMae.style.height = '50px';
        divMae.style.border = '1px solid black';
        divMae.style.display = 'inline-block';
        divMae.style.borderRadius = '50px';
        const color = document.getElementById('color-palette');
        divMae.className = 'color';
        color.appendChild(divMae);
        if (index === 0) {
            divMae.className = 'color selected';
        }
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

function modificaClasse() {
    const cor = document.querySelectorAll('.color');
    for (let index = 0; index < cor.length; index += 1) {
        cor[index].addEventListener('click', (e) => {
           for (let index = 0; index < cor.length; index += 1) {
            cor[index].className = 'color';
            
           }
            e.target.className = 'color selected';
        });
    }
}

function aleatorioBtn() {
    const btn = document.getElementById('button-random-color');
    btn.addEventListener('click', paint);
}

function pixel() {
    for (let index = 0; index < 25; index += 1) {
        const divMae = document.createElement('div');
        // divMae.type = 'pixel';
        divMae.style.backgroundColor = 'white';
        divMae.style.border = '1px solid black';
        divMae.style.width = '40px';
        divMae.style.height = '40px';
        const color = document.getElementById('pixel-board');
        divMae.className = 'pixel';
        color.appendChild(divMae);
    }
}

divMae();
aleatorioBtn();
paint();
pixel();
modificaClasse();

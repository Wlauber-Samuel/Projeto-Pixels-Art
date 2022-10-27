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

  let salvaCoresLS = [];
  for (let index = 0; index < cor.length; index += 1) {
    salvaCoresLS.push(cor[index].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(salvaCoresLS));
}

function verificaLS() {
  let recuperaCor = localStorage.getItem('colorPalette');
  const cor = document.querySelectorAll('.color');
  if (recuperaCor !== null) {
    let acessaValores = JSON.parse(recuperaCor);
    cor[0].style.backgroundColor = acessaValores[0];
    for (let index = 1; index < cor.length; index += 1) {
      cor[index].style.backgroundColor = acessaValores[index];
    }
  } else {
    paint();
  }
}

let salvaCor = 'rgb(0, 0, 0)';
function modificaClasse() {
  const cor = document.querySelectorAll('.color');
  for (let index = 0; index < cor.length; index += 1) {
    cor[index].addEventListener('click', (e) => {
      for (let index = 0; index < cor.length; index += 1) {
        cor[index].className = 'color';
      }
      salvaCor = e.target.style.backgroundColor;
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

const color = document.getElementById('pixel-board');
function mudarCor(event) {
  event.target.style.backgroundColor = salvaCor;
}
color.addEventListener('click', mudarCor);

const button = document.getElementById('clear-board');
button.addEventListener('click', () => {

  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
divMae();
aleatorioBtn();
verificaLS();
pixel();
modificaClasse();

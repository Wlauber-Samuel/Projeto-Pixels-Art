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
  const recuperaBoardSize = localStorage.getItem('boardSize');
  if (recuperaBoardSize !== null) {
    const color = document.getElementById('pixel-board');
    color.style.width = `${recuperaBoardSize * 43}px`;
    for (let index = 0; index < recuperaBoardSize * recuperaBoardSize; index += 1) {
      const divMae = document.createElement('div');
      divMae.style.backgroundColor = 'white';
      divMae.style.border = '1px solid black';
      divMae.style.width = '40px';
      divMae.style.height = '40px';
      const color = document.getElementById('pixel-board');
      divMae.className = 'pixel';
      color.appendChild(divMae);
    }
  } else {
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
}

const color = document.getElementById('pixel-board');
function mudarCor(event) {
  event.target.style.backgroundColor = salvaCor;
  salvaPixels();
}
color.addEventListener('click', mudarCor);

const button = document.getElementById('clear-board');
button.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
  salvaPixels();
});

function salvaPixels() {
  let saveDrawing = [];
  const pxs = document.getElementsByClassName('pixel');
  for (let index = 0; index < pxs.length; index += 1) {
    saveDrawing.push(pxs[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(saveDrawing));
}

function recuperaLS() {
  let recuperaCor = localStorage.getItem('pixelBoard');
  const cor = document.querySelectorAll('.pixel');
  if (recuperaCor !== null) {
    let acessaValores = JSON.parse(recuperaCor);
    cor[0].style.backgroundColor = acessaValores[0];
    for (let index = 1; index < cor.length; index += 1) {
      cor[index].style.backgroundColor = acessaValores[index];
    }
  }
}
function apagarQuadro() {
  const cor = document.querySelectorAll('.pixel');

  for (let index = cor.length - 1; index >= 0; index -= 1) {
    cor[index].remove();
  }
}

const btnGenerateSquares = document.getElementById('generate-board');
btnGenerateSquares.addEventListener('click', () => {
  const inputUser = document.getElementById('board-size').value;
  if (!inputUser) {
    alert("Board inválido!");
  } else {
    apagarQuadro();
    localStorage.removeItem('pixelBoard');
    const color = document.getElementById('pixel-board');
    color.style.width = `${inputUser * 43}px`;
    let salvaValor = inputUser;
    if (inputUser < 5) {
      salvaValor = 5;
    } else if (inputUser > 50) {
      salvaValor = 50;
    }
    localStorage.setItem('boardSize', salvaValor);
    for (let index = 0; index < salvaValor * salvaValor; index += 1) {
      const px = document.createElement('div');
      px.style.backgroundColor = 'rgb(255, 255, 255)';
      px.style.border = '1px solid black';
      px.style.width = '40px';
      px.style.height = '40px';
      px.className = 'pixel';
      color.appendChild(px);
    }
  }

});
divMae();
aleatorioBtn();
verificaLS();
pixel();
modificaClasse();
recuperaLS();

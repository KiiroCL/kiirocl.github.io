window.onload = () => {
  document.body.classList.remove("not-loaded");
  crearFlores(3); // Crea 3 flores
  crearCesped(2); // Crea 2 secciones de césped
};

function crearFlores(cantidad) {
  const container = document.querySelector('.flowers');
  const fragment = document.createDocumentFragment();
  
  for (let i = 1; i <= cantidad; i++) {
    const flower = document.createElement('div');
    flower.className = `flower flower--${i}`;
    
    const leafs = document.createElement('div');
    leafs.className = `flower__leafs flower__leafs--${i}`;
    
    leafs.innerHTML = `
      <div class="flower__leaf flower__leaf--1"></div>
      <div class="flower__leaf flower__leaf--2"></div>
      <div class="flower__leaf flower__leaf--3"></div>
      <div class="flower__leaf flower__leaf--4"></div>
      <div class="flower__white-circle"></div>
      ${[...Array(8)].map((_, k) => `<div class="flower__light flower__light--${k + 1}"></div>`).join('')}
    `;
    
    flower.appendChild(leafs);
    
    const line = document.createElement('div');
    line.className = 'flower__line';
    line.innerHTML = [...Array(4)].map((_, l) => `<div class="flower__line__leaf flower__line__leaf--${l + 1}"></div>`).join('');
    
    flower.appendChild(line);
    fragment.appendChild(flower);
  }
  
  container.appendChild(fragment);
}

function crearCesped(cantidad) {
  const container = document.querySelector('.growing-grass');
  const fragment = document.createDocumentFragment();
  
  for (let i = 1; i <= cantidad; i++) {
    const grass = document.createElement('div');
    grass.className = `flower__grass flower__grass--${i}`;
    
    const grassTop = document.createElement('div');
    grassTop.className = 'flower__grass--top';
    const grassBottom = document.createElement('div');
    grassBottom.className = 'flower__grass--bottom';

    grass.appendChild(grassTop);
    grass.appendChild(grassBottom);

    grass.innerHTML += [...Array(8)].map((_, j) => `<div class="flower__grass__leaf flower__grass__leaf--${j + 1}"></div>`).join('');

    fragment.appendChild(grass);
  }
  
  container.appendChild(fragment);
}

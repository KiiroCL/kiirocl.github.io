onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  
var num = 10;

var w = window.innerWidth;
var h = window.innerHeight;

var velx = [];
var vely = [];
var audio = document.getElementById("audio");

document.addEventListener('click', () => {
  audio.play();
});

estructurar()

function estructurar() {
  for(i=0;i<num;i++){
    //Crear corazon
    let heart = document.createElement("DIV");
    heart.className = "heart";
    document.body.appendChild(heart);
    //Asignar tamaño       
    let tam = Math.floor((Math.random() * 25) + 20);
    heart.style.width = tam+"px"
    heart.style.height = tam+"px"
    //Asignar posicion inicial
    let posy = Math.floor((Math.random() * 0.1*h) + 0.8*h);
    heart.style.top = posy+"px"
    let posx = Math.floor((Math.random() * 0.8*w) + 0.1*h);
    heart.style.left = posx+"px"
    //Crear vector direccion y id
    heart.id = "h"+i
    vely[i] = Math.floor((Math.random() * 5) - 10);
    velx[i] = Math.floor((Math.random() * 10) - 5);
    //Asignar evento
    heart.setAttribute("onclick","eliminar(this)")
  }
}

setInterval(function(){ move() },60);

function move(){
  for(i=0;i<num;i++){
    //Seleccion de corazon
    let heart = document.getElementById("h"+i);
    //Aumento de coordenadas
    let y =  parseInt(heart.style.top) + vely[i];
    let x =  parseInt(heart.style.left) + velx[i];
    //Reinicio de coordenadas
    if (x > 0.85*w) { x = 0.15*w;}
    if (x < 0.15*w) { x = 0.85*w;}
    if (y < 0.15*h) { y = 0.85*h;}
    if (y > 0.85*h) { y = 0.15*w;}
    //Asigmnacion de coordenadas
    heart.style.top = y + "px";
    heart.style.left = x + "px";
  }
}

function eliminar(element){
  element.style.display = "none";
}

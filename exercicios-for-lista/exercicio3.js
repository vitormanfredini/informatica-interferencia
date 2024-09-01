//1- depois de desenhar todos os circulos na tela, desenhe um background preto 
//2- depois de desenhar todos os circulos na tela, recomece na posição x = 0 e y = 10

var x = 0;
var y = 0;

function setup() {
  createCanvas(400, 400)
  background(220)
  rectMode(CENTER)
}

function draw() {
  x = x + 20;
  if (x > 400) {
    y = y + 20;
    x = 0;
  }

  fill(255, 0, 0)

  circle(x, y, 12)
}

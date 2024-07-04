//1- pinte de azul a metade de baixo do circulos
//2- pinte de azul a metade da direita do circulos

var x = 0;
var y = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  x = x + 20;
  if (x > 400) {
    y = y + 20;
    x = 0;
  }

  fill(255, 0, 0);

  circle(x, y, 10);
}

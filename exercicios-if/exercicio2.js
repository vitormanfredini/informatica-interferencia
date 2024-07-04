//1- desenhe circulos na parte da esquerda e quadrados na parte da direita
//1- desenhe circulos na parte da direita e quadrados na parte da esquerda

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
  square(x, y, 9)
}

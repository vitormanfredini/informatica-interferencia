//1- apenas os circulos da primeira linha de azul

var x = 0;
var y = 5;

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
  if(y > 300){
    fill(0, 0, 255);
  }

  circle(x, y, 10);
}

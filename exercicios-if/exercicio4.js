//1- desenhe as cores da bandeira da frança

var x = 0;
var y = 0;

function setup() {
  createCanvas(400, 400)
  background(220)
  rectMode(CENTER)
}

function draw() {
  x = x + 10;
  if (x > 400) {
    y = y + 10;
    x = 0;
  }

  fill(255, 0, 0)

  square(x, y, 12)
}

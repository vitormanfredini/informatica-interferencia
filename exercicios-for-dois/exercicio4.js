// desenhe uma sequencia quadrados e circulos usando a lista abaixo.
// se o numero for 0 desenhe um circulo, se for 1 desenhe um quadrado

var lista = [0,1,1,0,1,0,0,1,0,1,1,1,0,1,1]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120,10,30);
  fill(30,23,170)
  
  circle(40,200,30)
  square(40,200,30)
  
}
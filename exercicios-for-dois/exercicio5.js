// a lista abaixo tem as posições da bolinha para fazer uma animação
// 1- faça a animação da bolinha conforme a lista
// dica: recalcule a variável c
// 2- quando a animação chegar ao fim
// dica: use um "if" para voltar a variável c para zero quando a animação chegar ao fim


var lista = [5,4,3,2,3,4,5,6,7,6,5,4,3,2,1,2,3,4]

var c = 0

function setup() {
  createCanvas(400, 400);
  frameRate(10)
}

function draw() {
  background(120,10,30);
  fill(30,23,170)
  
  circle(200,lista[c]*40,30)
  
}
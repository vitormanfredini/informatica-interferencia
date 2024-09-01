// 8- fazer a bolinha bater no chão
// dica: use um "if" para mudar o sentido da velocidade somente quando a bolinha bater no chão. por exemplo: y > 400
// dica: para mudar o sentido da velocidade, use: velocidade = -velocidade

var velocidade = 5
var aceleracao = 1
var y = 0

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(220)

  velocidade = velocidade + aceleracao
  y = y + velocidade

  fill(120,230,35)
  circle(200,y,20)
  
}

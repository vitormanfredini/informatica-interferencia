//2- um dos quadrados está com o tamanho errado, conserte esse problema no código abaixo

var tamanhos = [20, 30, 40, 50, 60, 70, 5, 90, 100, 110];

function setup() {
  createCanvas(400, 400)
  background(220)
}

function draw() {

  for(var c=0;c<10;c=c+1){
    
    fill(210, c*26, 50)
    
    var tamanhoquadrado = tamanhos[c]
    square(c*40,200,tamanhoquadrado)
    
  }
  
  noLoop()
}

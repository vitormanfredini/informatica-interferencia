//1- desenhar 10 quadrados na tela

function setup() {
  createCanvas(400, 400)
  background(220)
}

function draw() {

  for(var c=0;c<4;c=c+1){
    
    fill(c*26, 50, 210)
    
    var tamanho = 20 + c*2
    square(c*40,200,tamanho)
    
  }
  
}

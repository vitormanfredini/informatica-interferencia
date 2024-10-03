// a sequencia de círculos precisa
// 1- ter as cores rosa e verde
// 2- não pode repetir a mesma cor mais do que 3 vezes seguidas

var lista = [0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  
  for(var c=0; c<245; c=c+1){
    
    if(lista[c] == 0){
      fill(0,0,255)
    }
    
    if(lista[c] == 1){
      fill(255,0,0)
    }
      
    circle(c*20,200,30)
  }
  
  
}
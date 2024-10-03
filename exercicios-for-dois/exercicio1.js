// todos os quadrados precisam ter cores diferentes
// dica: quem diz a cor de cada quadrado é a função "fill"

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120,10,30);
  
  for(var x=0; x<20; x=x+1){
    for(var y=0; y<20; y=y+1){
      
      fill(10,180,80)
      square(x*20,y*20,15)
      
    }
  }
  
}
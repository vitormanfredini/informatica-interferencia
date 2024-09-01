// 7- aumente os quadrados para 40. eles estão muito pequenos.
//    somente os últimos 2 quadrados devem ser rosa

var tamanho = 3

function setup() {
  createCanvas(400, 400)
  background(220)
}

function draw() {

  for(var x=0;x<400;x=x+40){
    
    fill(120,230,35)
    
    if(x > 100){
       fill(230,0,230)
    }
      
    square(x,200,tamanho)
  }

  noLoop();
}

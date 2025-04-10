var retangulos = [10,200,120,20,115,280,2,28,197,33,174,12,200,320,90,315,380,2,18,297,63,224]

function setup() {
  createCanvas(400, 400);
  frameRate(2)
}

function draw() {
  background(30,150,30);
  
  ////////
  
  var largura = 400 / retangulos.length;
  for(var c=0; c<retangulos.length; c=c+1){
    fill(253,115,190)
    rect(c*largura,retangulos[c],largura,400-retangulos[c]);
  }
}
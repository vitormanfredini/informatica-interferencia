//3- deixe cada quadrado com seu respectivo tamanho, use a lista de tamanhos
//dica: veja que o console.log está mostrando no seu terminal

var tamanhos = [5, 5, 20, 50, 60, 60, 50, 20, 5, 5];

function setup() {
  createCanvas(400, 400)
  background(220)
}

function draw() {

  for(var c=0;c<10;c=c+1){
    
    fill(210, c*26, 50)
    
    console.log(tamanhos[c])
    
    var tamanhoquadrado = 20
    square(c*40,200,tamanhoquadrado)
    
  }

  noLoop();
}

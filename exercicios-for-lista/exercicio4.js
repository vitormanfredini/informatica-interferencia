// 5- faça todos os quadrados terem cores diferentes
// dica 1: a função fill escolhe a cor do quadrado
// dica 2: utilize a variável "c" na função fill. multiplique ela por 20
// dica 3: use o * para multiplicar. por exemplo: c*20

function setup() {
  createCanvas(400, 400)
  background(220)
}

function draw() {

  for(var c=0;c<10;c=c+1){
    
    fill(200, 40, 100)
    square(c*40,200,40)
    
  }

  noLoop();
}

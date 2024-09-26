// remova apenas o círculo do centro
// dica: use o "if"

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  fill(168,222,116)
  
  for(var c=0; c<5; c++){
    circle(c*100,200,100)
  }
  
}
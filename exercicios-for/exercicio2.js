// transforme esta linha horizontal em uma linha vertical

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  fill(64,116,168)
  
  for(var c=0; c<100; c++){
    circle(c*5,200,20)
  }
  
}
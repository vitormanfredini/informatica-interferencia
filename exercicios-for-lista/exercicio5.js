// 6- faça os quadrados ocuparem a tela toda

function setup() {
  createCanvas(400, 400)
  background(220)
}

function draw() {

  for(var x=0;x<200;x=x+10){
    for(var y=0;y<350;y=y+10){
      fill(x*0.8, 255-y*0.8, ((x+y)/10)%2==0?250:0)
      square(x,y,10)
    }
  }

  noLoop();
}

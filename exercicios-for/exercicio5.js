// faça a bolinha passar pela cesta
var x = 300
var y = 400
var velocidadex = 1
var velocidadey = -4
var gravidade = 0.04
var cestalink = "https://cdn-icons-png.flaticon.com/512/43/43124.png"
var imagem

function setup() {
  createCanvas(400, 400);
  background(255,255,255);
  imagem = loadImage(cestalink);
}

function draw() {
  image(imagem, -5, 80, 100, 100);
  fill(random()*255, random()*255, random()*255)
  circle(x,y,20)
  
  
  x = x + velocidadex
  velocidadey = velocidadey + gravidade
  y = y + velocidadey
}
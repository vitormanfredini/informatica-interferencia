////////////////////////////////////////////////
///  DESAFIO DE PROGRAMAÇÃO - INTERFERÊNCIA  ///
////////////////////////////////////////////////

function atitude(distancia, tipo){
  // console.log(distancia, tipo)
  // pula()
  // abaixa()
}





//////////////////////////////////////////////
//////////////////////////////////////////////

var velocidade = 3;

var nivelDificil = false;

var personagem = {
  x: 0,
  y: 0,
  estado: 0,
  velocidadeVertical: 0
}

var pontos = 0;

var obstaculo = {
  x: -100,
  tipo: 0
}

var perdeu = false;

function desenhaPersonagem(x,y){
  var altura = 50;
  if(personagem.estado == 2){
    altura = 20
  }
  noStroke()
  fill(41, 68, 148)
  rect(x-5,y-altura-personagem.y,10,50)
  fill(97, 44, 24)
  circle(x,y-altura-personagem.y,15)
}

function desenhaChao(y){
  noStroke()
  fill(69, 117, 29)
  rect(0,y,600,100)
}

function desenhaObstaculo(y){
  var y2 = 40;
  var altura = 40;
  var largura = 20;
  if(obstaculo.tipo == 1){
    y2 = 110;
    altura = 70;
  }
  if(obstaculo.tipo == 2){
    altura = 20;
    y2 = 20;
    largura = 120;
  }
  fill(70,70,70);
  rect(obstaculo.x,y-y2,largura,altura)
}

function calcula(){
  if(obstaculo.x < -150){
    obstaculo.tipo = floor(random() * 2.99)
    obstaculo.x = 600
  }
  
  if(nivelDificil){
    obstaculo.x = obstaculo.x - velocidade - (pontos * 0.0015);
  }else{
    obstaculo.x = obstaculo.x - velocidade;
  }

  if(personagem.estado == 1){
    personagem.y = personagem.y + personagem.velocidadeVertical;
    personagem.velocidadeVertical = personagem.velocidadeVertical - 0.15;
    if(personagem.y < 0){
      personagem.y = 0;
      personagem.estado = 0;
    }
  }
  
  pontos = pontos + 1;
}

function desenhaPontos(){
  textSize(40)
  text(floor(pontos/10),15,42)
}

function keyPressed(){
  if(keyCode == 38){
    pula()
  }
  if(keyCode == 40){
    abaixa()
  }
}

function pula(){
  if(personagem.estado == 1){
    return;
  }
  personagem.velocidadeVertical = 5
  personagem.estado = 1
}

function abaixa(){
  if(personagem.estado == 1){
    return;
  }
  personagem.estado = 2
}

function bateu(){
  if(obstaculo.x < -150 || personagem.x + 35 < obstaculo.x){
    return;
  }
  
  if(obstaculo.tipo == 0 && personagem.x + 35 < obstaculo.x + 20){
    if(personagem.y < 40){
      reset();
    }
  }
  
  if(obstaculo.tipo == 1 && personagem.estado != 2 && personagem.x + 35 < obstaculo.x + 20){
    reset();
  }
  
  if(obstaculo.tipo == 2 && personagem.x + 35 < obstaculo.x + 120){
    if(personagem.y < 20){
      reset();
    }
  }
  
}

function reset(){
  perdeu = true;
}

function setup(){
  createCanvas(600, 300)
}

function draw(){
  if(perdeu){
    background(0)
    fill(255);
    text("você fez "+floor(pontos/10)+" pontos!",120,160)
    noLoop();
    return;
  }
  calcula();
  var distancia = obstaculo.x - personagem.x - 35;
  if(distancia >= 0){
    atitude(distancia,obstaculo.tipo);
  }
  bateu();
  background(127 + (0.05 * pontos), 177, 235)
  desenhaPersonagem(30,220)
  desenhaChao(220)
  desenhaObstaculo(220)
  desenhaPontos()
}


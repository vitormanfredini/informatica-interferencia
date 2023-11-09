let capture;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  background(0);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  capture.loadPixels();
  for(let i=0 ;i <capture.pixels.length;i+=4){
    capture.pixels[i] = 255
  }
  capture.updatePixels();
  image(capture, 0, 0);
  // noLoop();
}

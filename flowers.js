var canvas;
var rainbow = 212;
var x = 0;
var y = 0;
var disable;
var sketch;




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.parent('sketch');
  canvas.style('z-index', '-1');

  disable = createCheckbox('  Activate Bubbles', true);
  disable.mousePressed(stopSketch);
  disable.position(50,50);

}

function stopSketch(){
  if (this.checked()){
    background(255);
    noLoop();
  } else {
    loop();
  } 
}

function draw() {

  rainbow++;
  if (rainbow > 255) {
    rainbow = 212;
  }

  x = lerp(x, mouseX, .5);
  y = lerp(y, mouseY, .5);

  let d = dist(x, y, pmouseX, pmouseY);
  ellipse(mouseX, mouseY, d, d);
  noStroke();
  fill(255, rainbow, 212);
  if (mouseIsPressed) {
    background(255);
  }
}

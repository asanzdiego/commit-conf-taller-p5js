let ellipseWidth = 0;
let ellipseColor = 0;
let deltaWidth = 1;
let deltaColor = 1;
let mic;

function setup() {
  createCanvas(window.screen.width-75, window.screen.height-150);
  colorMode(HSB, 255);
  background(255);
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  if (mouseIsPressed) {
    ellipseWidth += deltaWidth;
    ellipseColor += deltaColor;
    if (ellipseWidth > 255) deltaWidth = -1;
    if (ellipseWidth < 1) deltaWidth = 1;
    if (ellipseColor > 255) ellipseColor = 0
  }

  if (keyIsPressed) {

    if (keyCode === DELETE) {
      background(255);
    }
    if (keyCode === UP_ARROW) {
      if (ellipseWidth < 255) ellipseWidth++; 
    }
    if (keyCode === DOWN_ARROW) {
      if (ellipseWidth > 1) ellipseWidth--; 
    }
    if (keyCode === LEFT_ARROW) {
      if (ellipseColor < 255) ellipseColor++; 
      else ellipseColor = 1
    }
    if (keyCode === RIGHT_ARROW) {
      if (ellipseColor > 1) ellipseColor--;
      else ellipseColor = 255
    }
  }

  let vol = mic.getLevel();

  fill(ellipseColor, 127 + random(-26, 26), 127 + random(-26, 26));
  ellipse(mouseX + random(-1, 1)*vol*100, mouseY + random(-1, 1)*vol*100, ellipseWidth, ellipseWidth);
}
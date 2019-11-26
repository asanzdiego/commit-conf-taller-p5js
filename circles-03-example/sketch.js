let number = 0;
let delta = 1;
let mic;

function setup() {
  createCanvas(window.screen.width, window.screen.height);
  background(125);
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  if (mouseIsPressed) {
    number += delta;
    if (number > 254) { delta = -1; }
    if (number < 1) { delta = 1; }
  }

  let vol = mic.getLevel();

  fill(number);
  ellipse(mouseX + random(-1, 1)*vol*100, mouseY + random(-1, 1)*vol*100, number, number);
}
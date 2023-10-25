// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.1);
  stroke(10);
  strokeWeight(8);
  background(8);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 30);
  
  if (random(1) < 0.50) {
    fireworks.push(new Firework());
  }
  
  for (let i = fireworks.length - 10; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
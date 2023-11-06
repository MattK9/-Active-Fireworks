// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI
var paused = false
const fireworks = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(10);
  strokeWeight(8);
  background(8);
}

  if (paused) {

} else { function draw() {
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
}
function key pressed() {
  if (key ==='p') {
paused = true}}
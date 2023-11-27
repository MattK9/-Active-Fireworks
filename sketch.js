// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI
var paused = false;
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

 function draw() {
  if (paused) {
    // Do paused stuff
  } else {
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

function keyPressed() {
  if (key ==='p') {
     paused = !paused }}
fill (255)
rect (300, 400, 200, 75);
fill (0);
textSize (50);
text ('RESET', 320, 455);
PopStateEvent();
function isMouseOverReset(){
  let isMouseOver = false; 
  if paused && mouseX > resetX && mouseX < (resetX + resetWidth) &&
  mouseY > resetY && mouseY < (resetY + resetHeight)) {
    isMouseOver = true;
  }
 return isMouseOver;  
}
function mouseDragged() {
  console.log(mouseX) ; 
}

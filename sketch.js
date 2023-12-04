// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI
var paused = false;
const fireworks = [];
let gravity;
let resetX = 300;
let resetY = 400;
let resetWidth = 200;
let resetHeight = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.0);
  stroke(10);
  strokeWeight(8);
  background(8);
}

 function draw() {
  if (paused) {
    // Do paused stuff
    push();
    fill(255)
    rect(resetX, resetY, resetWidth, resetHeight);
    fill(0);
    textSize(50);
    text('RESET', 320, 455);
    pop();
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
    paused = !paused 
  }
}

function isMouseOverReset() {
  let isMouseOver = false; 
  if (paused && mouseX > resetX && mouseX < (resetX + resetWidth) &&
  mouseY > resetY && mouseY < (resetY + resetHeight)) {
    isMouseOver = true;
  }
 return isMouseOver;  
}

function mouseDragged() {
  console.log(mouseX) ; 
}

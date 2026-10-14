let x = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (220);
  frameRate(12);
  ellipse(x, 200, 50, 50);
  x+= 2;
  if (x>width) {
    x = 0;
  }
}
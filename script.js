let x = 0; // image
let img; //animation on x - axis
let vid; // video
let sound;
let rotate;
async function setup() {
  createCanvas(400, 400);
  //load image
  img = await loadImage('media/speed.gif');
  vid = createVideo('media/fire_racing.mp4');
  mySound = await loadSound('media/wet-fart-meme.mp3');
  
  
}

function draw() {
  rotate = frameCount * 2;
  background (220);
  tint('salmon')
  image(img, x, 0);
  image(vid.loop(), 50, 50);
  //filter(THRESHOLD);
  x += 2;
  if (x > width) {
    x = 0;
  }
  vid.play();
  
  /** rotate(rotate);
  fill("red");
  ellipse(300, 200, 50); **/
}

function mousePressed() {
  mySound.play();
}
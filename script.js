let x = 0; // image
let img; //animation on x - axis
let vid; // video
async function setup() {
  createCanvas(400, 400);
  //load image
  img = await loadImage('media/speed.gif');
  vid = createVideo('/media/fire_racing.mp4');
}

function draw() {
  background (220);
  tint('salmon')
  image(img, x, 0, );
  image(vid, 0, 9);
  //filter(THRESHOLD);
  x += 2;
  if (x > width) {
    x = 0;
  }
  vid.play();
}
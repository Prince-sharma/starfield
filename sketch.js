let stars = [];
let radius = 4;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 2500*4; i++) {
    stars[i] = new star(
      random(-width / 2, width / 2),
      random(-height / 2, height / 2),
      random(width),
      radius
    );
  }
  colorMode(HSB);
}

function draw() {
  background(0);
  let speedS = map(mouseX, 0, width, 0, 50);
  translate(width / 2, height / 2);
  for (s of stars) {
    s.update(speedS);
    s.show();
  }
}

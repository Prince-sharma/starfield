class star {
  constructor(x, y, z, r = 4) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
    this.pz = z;
  }

  update(speed) {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width / 2, width / 2);
      this.y = random(-height / 2, height / 2);
      this.pz = this.z;
    }
  }

  show() {
    fill(49, 222, 0);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let newR = map(this.z, 0, width, 4, 0);
    circle(sx, sy, newR);

    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);
    stroke(random()*255, 255, 255);
    
    strokeWeight(newR);
    line(px, py, sx, sy);
    this.pz = this.z;
  }
}

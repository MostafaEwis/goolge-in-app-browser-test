function setup() {
  createCanvas(700, 700);
}

function f(x) {
  return pow(x, 2);
}

function draw() {
  background("pink");
  translate(width / 2, height / 2);
  stroke("purple");
  strokeWeight(1);
  line(-width / 2, 0, width / 2, 0);
  line(0, -height / 2, 0, height / 2);
  noFill();
  beginShape();
  for (let x = -350; x < 350; x += 0.5) {
    strokeWeight(2);
    vertex(x, -0.01 * f(x));
  }
  endShape();
}

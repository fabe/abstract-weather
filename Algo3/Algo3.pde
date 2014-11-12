// WIP

// Global parameters
color bg    = #010D30;
color lines = #AA50BD;

PGraphics pg;

void setup() {
  frameRate(60);

  for (int i = 0; i < height; i = i + 50) {
    stroke(255);
    line(0, i, width/2, 0);
  }

  // Retina graphics
  size(700, 700, "processing.core.PGraphicsRetina2D");
  hint(ENABLE_RETINA_PIXELS);
  smooth();

  // Basic settings
  background(bg);
  strokeWeight(2);
  noFill();
  stroke(lines);

  // Left Bottom to Right Top: Down
  beginShape();
  vertex(0, width);
  bezierVertex(0, width, 0, width, 0, width);
  bezierVertex(0, width, width, width, width, 0);
  endShape();

  // Left Bottom to Right Top: Up
  beginShape();
  vertex(0, width);
  bezierVertex(0, width, 0, width, 0, width);
  bezierVertex(0, width, 0, 0, width, 0);
  endShape();

  // Left Top to Right Bottom: Up
  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0, 0, 0, 0, 0);
  bezierVertex(0, 0, width, 0, width, width);
  endShape();

  // Left Top to Right Bottom: Down
  beginShape();
  vertex(0, 0);
  bezierVertex(0, 0, 0, 0, 0, 0);
  bezierVertex(0, 0, 0, width, width, width);
  endShape();
}

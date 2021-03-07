var choice = 'linear';
var chem = "Linear";

function setup() {
  var canvas = createCanvas(windowWidth, 0.75*windowHeight, WEBGL);
  canvas.parent('canvas');
  angleMode(DEGREES);
}

function draw() {
  background(220);
  noStroke();
  directionalLight(20000000, 25000000, 10000, 0, 0, -1);
  rotateY(frameCount/5);
  rotateZ(frameCount/5);
  rotateX(frameCount/5);
  if (choice == 'linear') {
    linear();
    chem = "Linear";
  } else if (choice == 'bent') {
    bent();
    chem = "Bent";
  } else if (choice == 'trigonal') {
    trigonal();
    chem = "Trigonal Planar";
  } else if (choice == 'tetra') {
    tetrahedral();
    chem = "Tetrahedral";
  } else if (choice == 'pyra') {
    bipyramidal();
    chem = "Trigonal Bipyramidal";
  } else {
    octahedral();
    chem = "Octahedral";
  }
  document.getElementById('desc').innerHTML = "Molecular Model: " + chem;
}

function choose(model) {
  choice = model;
}

function linear() {
  push();
  fill('white');
  noStroke();
  rotateZ(90);
  cylinder(10, 220);
  pop();

  push();
  translate(-150, 0, 0);
  fill('blue');
  sphere(50);
  pop();
  
  push();
  translate(0, 0, 0);
  fill('red');
  sphere(50);
  pop();
  
  push();
  translate(150, 0, 0);
  fill('blue');
  sphere(50);
  pop();
}

function bent() {
  push();
  fill('white');
  noStroke();
  rotateZ(90);
  rotateX(30.35);
  translate(0, 110, 0);
  cylinder(10, 150);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(90);
  rotateX(-30.25);
  translate(0, -110, 0);
  cylinder(10, 150);
  pop();

  push();
  translate(-120, 0, 120*tan(30.25));
  fill('blue');
  sphere(50);
  pop();
  
  push();
  translate(0, 0, 0);
  fill('red');
  sphere(50);
  pop();
  
  push();
  translate(120, 0, 120*tan(30.25));
  fill('blue');
  sphere(50);
  pop();
}

function trigonal() {
  push();
  fill('white');
  noStroke();
  rotateZ(180);
  translate(0, -80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(-120);
  translate(0, 80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(120);
  translate(0, 80, 0);
  cylinder(10, 110);
  pop();

  push();
  translate(-150*sin(120), 150*cos(120), 0);
  fill('blue');
  sphere(50);
  pop();
  
  push();
  translate(0, 0, 0);
  fill('red');
  sphere(50);
  pop();
  
  push();
  translate(150*sin(120), 150*cos(120), 0);
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 150, 0);
  fill('blue');
  sphere(50);
  pop();
}

function tetrahedral() {
  push();
  fill('white');
  noStroke();
  rotateZ(180);
  rotateX(-19.5);
  translate(0, -80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(-120);
  rotateX(19.5);
  translate(0, 80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(120);
  rotateX(19.5);
  translate(0, 80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(90);
  rotateX(-90);
  translate(0, 80, 0);
  cylinder(10, 110);
  pop();

  push();
  translate(-150*sin(120), 150*cos(120), 50/cos(19.5));
  fill('blue');
  sphere(50);
  pop();
  
  push();
  translate(0, 0, 0);
  fill('red');
  sphere(50);
  pop();
  
  push();
  translate(150*sin(120), 150*cos(120), 50/cos(19.5));
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 150, 50/cos(19.5));
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 0, -150);
  fill('blue');
  sphere(50);
  pop();
}

function bipyramidal() {
  push();
  fill('white');
  noStroke();
  rotateZ(180);
  translate(0, -80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(-120);
  translate(0, 80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(120);
  translate(0, 80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(90);
  rotateX(90);
  translate(0, -80, 0);
  cylinder(10, 110);
  pop();

  push();
  fill('white');
  noStroke();
  rotateZ(90);
  rotateX(-90);
  translate(0, -80, 0);
  cylinder(10, 110);
  pop();

  push();
  translate(-150*sin(120), 150*cos(120), 0);
  fill('blue');
  sphere(50);
  pop();
  
  push();
  translate(0, 0, 0);
  fill('red');
  sphere(50);
  pop();
  
  push();
  translate(150*sin(120), 150*cos(120), 0);
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 150, 0);
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 0, -150);
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 0, 150);
  fill('blue');
  sphere(50);
  pop();
}

function octahedral() {
  push();
  fill('white');
  noStroke();
  rotateZ(90);
  cylinder(10, 220);
  pop();

  push();
  fill('white');
  noStroke();
  rotateX(90);
  cylinder(10, 220);
  pop();

  push();
  fill('white');
  noStroke();
  rotateY(90);
  cylinder(10, 220);
  pop();

  push();
  translate(-150, 0, 0);
  fill('blue');
  sphere(50);
  pop();
  
  push();
  translate(0, 0, 0);
  fill('red');
  sphere(50);
  pop();
  
  push();
  translate(150, 0, 0);
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 150, 0);
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, -150, 0);
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 0, 150);
  fill('blue');
  sphere(50);
  pop();

  push();
  translate(0, 0, -150);
  fill('blue');
  sphere(50);
  pop();
}

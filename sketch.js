const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hr, mn, sc;
var dissc, dismn, dishr;

function setup() {
  createCanvas(350,350);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  hr = hour();
  mn = minute();
  sc = second();    
}

function draw() {
  background(10);
  Engine.update(engine);

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  dissc = scAngle -90;
  dismn = mnAngle -90;
  dishr = hrAngle -90;

  strokeWeight(4);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));

  noFill();
  stroke(255, 0, 0);
  arc(0,0,260,250,-90,dissc);
  
  stroke(0, 255, 0);
  arc(0,0,240,240,-90,dismn);

  stroke(0, 0, 255);
  arc(0,0,220,230,-90,dishr);
  
  push();
  rotate(dissc);
  stroke(255, 0, 0);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(dismn);
  stroke(0, 255, 0);
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(dishr);
  stroke(0, 0, 255);
  line(0, 0, 50, 0);
  pop();

  drawSprites();
}
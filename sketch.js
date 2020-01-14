const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower1;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;



  tower1 = new Tower1(620,200,80,200);
  tower2 = new Tower1(780,200,80,200);
 tower3 = new Tower1(700,200,80,300);
 tri = new Cone(800,200,3,50);
  //tower2 = new Tower1(600,320,20,100);
  Gr = new Ground(600,380,1200,20);
}

function draw(){
  background("Green");

  Engine.update(engine);
  tower1.display();
  tower2.display();
  tower3.display();
  tri.display();
Gr.display();
}
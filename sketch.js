const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var hammer1;
var rubber1,stone1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(600,385,1200,20);
    hammer1=new Hammer(300,200,100,30);
    rubber1=new Rubber(300,100,55, 55);
    stone1=new Stone(200,200,50,50);
}

function draw(){
    background("blue");
    Engine.update(engine);
    ground1.display();
    hammer1.display();
    rubber1.display();
    stone1.display();
}
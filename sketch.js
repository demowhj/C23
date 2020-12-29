const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,350,800,50)

    box1 = new Box(300,200,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);

    

    box1.display();
    ground.display();
}
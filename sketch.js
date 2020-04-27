// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine, world
var tank, ball, shoot, core;

function setup() {
    createCanvas(800,400)
    background(0,255,255);
    engine = Engine.create();
    world = engine.world 
    Lowertank = new Tanker(124,370,100,20);
    Uppertank = new Tanker(124,350,100,20);
    ball = new Ball(174,150,100)
    core = new Cannon(175,345,80);
    ground = new Ground(10,390,800,20)
    lancher = new Lancher(189,320,100,20,-PI/7);
}

function draw() {
    Engine.update(engine);
    
    // ball.display();
    lancher.display();
    core.display();
    Lowertank.display();
    Uppertank.display();
    ground.display();
    
}


function mousePressed(){
    console.clear();
    console.log(mouseX+","+mouseY);
}
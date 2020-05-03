class Cannon  {
    constructor(x,y,radius,angle){
        var option = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        Matter.Body.setAngle(this.body, angle)
        World.add(world,this.body); 
     }
     display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y)
       rotate(angle);
       ellipseMode(CENTER);
       ellipse(0,0,this.radius);
       pop();
     }
} 
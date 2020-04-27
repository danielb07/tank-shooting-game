class Ball {
  constructor(x,y,radius) {
    var option = {
      restitution:0.6,
    }
    this.x = x;
    this.y = y;
    this.radius = radius
    this.body = Bodies.circle(this.x,this.y,this.radius,option);
    World.add(world,this.body);
    
    
  }

  display() {
    push();
    var pos = this.body.position
    
    fill("#ffffff ");
    ellipse(pos.x,pos.y,this.radius,this.radius)
    pop();
  }
}

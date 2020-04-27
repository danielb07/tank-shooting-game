class CanonBall {
  constructor(x, y,r) {
    var options = {
      isStatic:true,
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    this.body = Bodies.circle(x,y,r);
    this.radius = r;

  };

  display(){
    var pos = this.body.position;
    fill("#c2c1bd")
    ellipse(pos.x,pos.y,this.radius,this.radius);
  };
};

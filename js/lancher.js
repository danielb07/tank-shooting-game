class Lancher  {
    constructor(x,y,width,height,angle){
       var option = {
           isStatic:true
       }
       this.body = Bodies.rectangle(x,y,width,height,option);
       this.width = width;
       this.height = height;
       Matter.Body.setAngle(this.body, angle)
       World.add(world,this.body); 
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height)
      pop();
    }
}
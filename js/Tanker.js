class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body)

     this.height = height;
     this.width = width;
    }

    display(){
      fill("#c2c1bd")
      var pos = this.body.position;
      rect(pos.x,pos.y,this.width,this.height)
    };
}

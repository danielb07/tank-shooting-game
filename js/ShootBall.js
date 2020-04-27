class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }

    attach(body){}

    shoot(){}

    display(){
        push();
        var A = this.sling.bodyA.position;
        var B = this.pointB;
        strokeWeight(4)
        line(A.x,A.y,B.x,B.y)
        pop();  
    }

}

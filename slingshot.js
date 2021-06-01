class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB
    }
fly()
{
    this.chain.bodyA=null;     //bodyA=blank
}
    display(){
        if(this.chain.bodyA)
        {
        var pointA = this.chain.bodyA.position;
     //   var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    
}
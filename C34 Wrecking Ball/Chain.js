class Chain
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 310
        }

        this.pointB = pointB

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display()
    {
      if(this.chain.bodyA)
      {
        var pointA = this.chain.bodyA.position;
        var pointb = this.pointB;
        push()
        strokeWeight(10);
        stroke("yellow");
        line(pointA.x, pointA.y, pointb.x, pointb.y);
        pop()
      } 
    }
    
}
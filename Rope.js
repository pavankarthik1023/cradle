class Rope{
    constructor(body1, body2,offsetX,offsetY){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    
}

        

        
    
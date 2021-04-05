class rope {
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
                var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.004,
            lenght:200,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
         this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display() {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position     
        strokeWeight(4);
        var anchor1X=pointA.x;
        var anchor1Y=pointA.y;+this.offsetY
        var anchor2Y=pointB.y
        var anchor2X=pointB.x+this.offsetX
       line(anchor1X,anchor1Y,anchor2X,anchor2Y);

    }
}



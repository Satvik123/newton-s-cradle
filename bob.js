class bob {
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{isStatic:false});
this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x,pos.y,this.radius);
    }
}
class Snow{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{restitution:0.5});
        this.radius=radius;
        this.image=loadImage("snow4.webp");
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("yellow");
        strokeWeight(10);
        fill("red");
        imageMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius);
        pop()
    }


}
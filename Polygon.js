class Ball{
    constructor (x, y, r){
        this.body = Bodies.circle (50,200,20);
        World.add(world,this.body)
        console.log(this.body)
    }
    display(){
        var pos = this.body.position 
        push()
        var angle = this.body.angle
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill("yellow")
        strokeWeight(2)
        ellipse(0,0,20,20);
        pop();
    }
}
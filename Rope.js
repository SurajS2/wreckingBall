class Rope{
constructor (body1,point1){
    var options = {
        bodyA: body1,
        pointB: point1,
        stiffnes: 1.2,
        length:250
    }
    this.pointB=point1;
    this.rope=Constraint.create(options);
    World.add(world,this.rope)
}
display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    push();
    stroke(48,22,8);
    strokeWeight(3);
    line(pointB.x,pointB.y,pointA.x,pointA.y)
    pop()
}


}
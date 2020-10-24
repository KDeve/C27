class Chain{

    constructor(bodyA,bodyB){
        var options ={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffnes:0.05,
        length:50,
        }
      this.chain=  Matter.Constraint.create(options)
        World.add(world,this.chain);
    }

    display(){
        push();
        strokeWeight(5)
        stroke("blue")
        
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    pop();
    }
}




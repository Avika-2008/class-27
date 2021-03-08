class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bird.body,
            bodyB : log6.body,
            length : 10,
            stiffness : 0.06
        } 
        this.chain = Constraint.create(options)  
        World.add(world,this.chain)   
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        stroke("lightbrown")
        strokeWeight(3)
        line(bird.body.position.x,bird.body.position.y,log6.body.position.x,log6.body.position.y)
    }
}

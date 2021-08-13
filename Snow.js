class Snow{
    constructor(x,y,width,height){
        var options ={
            restitution:0.1,
            friction:0.2,
            density:0.01,

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        //this.width = width;
        //this.height=height;
        this.image=loadImage("snow1.jpg","snow2.jpg","snow3.jpg");
        World.add(world,this.body);
    }

    display(){
        push();
        translate();
        imageMode(CENTER);
        image(0,0,this.body.width,this.body.height);
        this.image.scale=2;
        pop();
    }
}
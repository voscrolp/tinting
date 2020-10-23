class Picture{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage('sprites/smiley face.png');
        this.width = width;
        this.height = height;
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}
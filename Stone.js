class Stone {
    constructor(x,y,width,height) {
      var options = {
          'density':100,
          'friction':1.0,
          'restitution':0.5
      };
      this.body = Bodies.ellipse(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
     
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }

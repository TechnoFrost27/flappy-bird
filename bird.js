function Bird() {
    this.y = height / 2;
    this.x = width / 2;
    this.gravity = 0.6;
    this.lift = -15;
    this.velocity = 0;
  
    this.show = function() {
      //fill(0, 255, 200);
       fill(0, 200, 200);
      ellipse(this.x, this.y, 32, 32);
    }
    this.up = function() {
      this.velocity += this.lift;
      
    }
    this.update = function() {
      this.velocity += this.gravity;
      this.velocity*=0.95;
      this.y += this.velocity;
  
      if (this.y > height) {
        this.y = height;
        this.velocity = 0
      }
  
  
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0
      }
    }
  
  
  
  
  }
function Player(){

    // Initial position of rectangle
    this.xposition = width / 2; 
    this.yposition = height - 30;
    
    // Dimensions of rectangle 
    this.w = 180;
    this.h = 20;
    this.changePosition = 7;

    // Top and bottom coordinates of rectangle for collision purposes
    this.top = this.xposition - this.w/2;
    this.bottom = this.x + this.w/2;

    // Function to display rectangle 
    this.show = function() {
        rectMode(CENTER);
        fill(0,105,132)
        rect(this.xposition, this.yposition, this.w, this.h)
    }

   
    // Function handles rectangle movement
    this.move = function() {
        if (mouseX < this.xposition) {
            this.xposition -= this.changePosition;        
        }

        else if (mouseX > this.xposition) {
            this.xposition += this.changePosition;
        }

        this.top = this.xposition - this.w/2;
        this.bottom = this.xposition + this.w/2;
    }
}

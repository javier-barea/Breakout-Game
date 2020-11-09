function Block(xposition, yposition){

    // Initial position of blocks
    this.xposition = xposition;
    this.yposition = yposition + 40;

    // Dimensions of blocks
    this.w = 80;
    this.h = 40;

    // Top and bottom coordinates of rectangle for collision purposes
    this.top = this.xposition - this.w/2;
    this.bottom = this.xposition + this.w/2;
        

    // Variables to get random color for each block
    this.firstColor = random(255);
    this.SecondColor = random(255);
    this.ThirdColor = random(255);

    // Function to display blocks
    this.show = function() {   
        rectMode(CENTER);    
        fill(this.firstColor, this.SecondColor, this.ThirdColor);
        rect(this.xposition, this.yposition, 80, 40);
    }

}

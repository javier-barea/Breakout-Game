
function Ball() {

    // Initial position and dimensions of ball
    this.xposition = width / 2;
    this.yposition = height / 2 + 150;
    this.radius = 15;

    // X and Y components of the velocity
    this.horizontalVelocity = 5;
    this.verticalVelocity = 5;

    // Function to show the ball
    this.show = function() {
        fill(255); // Makes the ball white 
        ellipse(this.xposition, this.yposition, this.radius, this.radius); // Creates a proportional ball
    }
    
    // Function handles ball movement
    this.move = function() {
        this.xposition += this.horizontalVelocity;
        this.yposition += this.verticalVelocity;    
    
        if (this.xposition > width || this.xposition < 0) {
            this.horizontalVelocity =   -this.horizontalVelocity;
        }
    }


    // Function handles collisions 
    this.collision = function(element) {
        if  (this.yposition <= (element.yposition + element.h/2) && this.yposition >= (element.yposition - element.h/2)) {

            if (this.xposition >= element.top && this.xposition <= element.bottom) {
                return true;
            }        
            return false;
        }
    }

    
}
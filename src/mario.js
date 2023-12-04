class Mario{
    constructor(gameScreen, left, bottom, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.bottom = bottom;
        this.width = width;
        this.height = height;
        this.element = document.createElement ("img");
        this.directionX = 0;
        this.isMarioJumping = false;
        this.hearts = 3;

        this.element.src = imgSrc; 
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.bottom = `${this.bottom}px`;
        this.element.style.height = `${this.height}px`;
        
        this.gameScreen.appendChild(this.element);
    }

    move(){
        this.left += this.directionX;
    
        if (this.left < -50){
          this.left = -50;
        }
      
        if (this.left > this.gameScreen.offsetWidth - this.width + 50){
          this.left = this.gameScreen.offsetWidth - this.width + 50;
        }
      
        this.updatePosition();
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }

    jump(){
        if(!this.isMarioJumping){
            this.isMarioJumping = true;
            let startPos = this.bottom;
            let endPos = this.bottom + 100;
            let speed = 5;

            let jumpInterval = setInterval(()=>{
                if (startPos < endPos){
                    this.element.src = "./images/mario-no-shadow.gif";
                    startPos += speed;
                    this.element.style.bottom = `${startPos}px`;
                } else{
                    clearInterval(jumpInterval);
                    this.fall();
                }
            }, 20);
        }   
    }

    fall(){
        let startPos = this.bottom + 100;
        let endPos = this.bottom;
        let speed = 3;

        let fallInterval = setInterval(()=>{
            if (startPos > endPos){
                startPos -= speed;
                this.element.style.bottom = `${startPos}px`;
            } else {
                clearInterval(fallInterval);
                this.element.src = "./images/mario.gif";
                this.isMarioJumping = false;
            }
        }, 20);
    }

    didCollide(mushroom){
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = mushroom.element.getBoundingClientRect();

        if(playerRect.left + 40 < obstacleRect.right && 
            playerRect.right - 60 > obstacleRect.left &&
            playerRect.top + 40 < obstacleRect.bottom &&
            playerRect.bottom - 60 > obstacleRect.top
        ){
            return true;
        } else {
            return false; 
        }
    }
}
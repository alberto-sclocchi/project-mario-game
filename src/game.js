class Game{
    constructor(){
        this.startScreen =  document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameContainer = document.querySelector("#game-container")
        this.gameEndScreen = document.querySelector("#game-end");
        this.height = 500;
        this.width = 700;
        this.obstacles = [];
        this.score = 0;
        this.hearts = 3;
        
        this.gameIsOver = false;
        this.mario = new Mario(this.gameScreen, 40, 15, 175, 175, "./images/mario.gif")
    }

    start(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameContainer.style.display = "block";

        this.gameLoop();
    }

    gameLoop(){
        if (this.isGameOver){
          return;
        }

        this.update();

        window.requestAnimationFrame(() => this.gameLoop());
    }

    update(){
        this.mario.move();

        if (Math.random() > 0.98 && this.obstacles.length < 1){
            this.obstacles.push(new Mushroom(this.gameScreen));
        }

        for (let i = 0; i < this.obstacles.length; i++){
            const mushroom = this.obstacles[i];
            
            mushroom.move();

            if(this.mario.didCollide(mushroom) && !this.mario.isMarioJumping){
                mushroom.element.style.display = "none";
                this.obstacles.splice(i,1);
                this.hearts--;
                console.log("hello")
                i--;
            } else if (mushroom.right > this.width){
                this.score++;
                mushroom.element.style.display = "none";
                this.obstacles.splice(i,1);
                document.querySelector("#score").innerHTML = this.score;
                console.log("hello hi");
                i--;
            }
        }

        if(this.hearts === 0){
            console.log("End Game");
            this.endGame();
        }
    
    }
}
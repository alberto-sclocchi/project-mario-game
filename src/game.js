class Game{
    constructor(){
        this.startScreen =  document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameContainer = document.querySelector("#game-container")
        this.gameEndScreen = document.querySelector("#game-end");
        this.height = 500;
        this.width = 700;
        this.obstacles = [];
        this.level = 0;
        this.score = 0;
        this.speed = 3;
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
            this.obstacles.push(new Mushroom(this.gameScreen, this.speed, this.level));
        }

        for (let i = 0; i < this.obstacles.length; i++){
            const mushroom = this.obstacles[i];
            mushroom.move();

            if(this.mario.didCollide(mushroom)){
                mushroom.element.style.display = "none";
                this.obstacles.splice(i,1);
                this.hearts--;
                console.log("hit")
                i--;
            } else if (mushroom.right > this.width){
                this.score++;
                document.querySelector("#score").innerHTML = this.score;
                this.obstacles.splice(i,1);
                mushroom.element.style.display = "none";

                if (this.score % 5 === 0){
                    this.level++;
                    this.speed ++; 
                    document.querySelector("#level").innerHTML = this.level;
                    console.log("level", this.level)
                    console.log("speed", mushroom.speed)
                }

                i--;
            }
        }

        if(this.hearts === 0){
            console.log("End Game");
            this.endGame();
        }
    
    }
}
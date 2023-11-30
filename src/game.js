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
    }
}
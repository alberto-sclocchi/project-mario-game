window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const instructionButton = document.getElementById("instructions-button");
  const mainPage = document.getElementById("main-page-button");

  let game;

    startButton.addEventListener("click", ()=>{
      startGame();
    });
    
    mainPage.addEventListener("click", ()=>{
      location.reload();
    });

    restartButton.addEventListener("click", ()=>{
      startGame();
    });
    
    function startGame(){
      game = new Game();
      game.start();
      game.backgroundMusic.play();
    }

    instructionButton.addEventListener("click",()=>{
      const parent = document.getElementById("instructions");
      parent.classList.toggle("instructions")
    });

    window.addEventListener("keydown", (event)=>{
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowRight",
        " ",
        "a",
        "d",
        "ArrowUp"
      ];
  
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
        switch(key){
          case " ":
          case "ArrowUp":
            game.mario.jump();
            if (!game.isGameOver){
              game.jumpSound.play();
            }
            break;
          case "ArrowLeft":
          case "a":
            game.mario.directionX = -2;
            game.mario.element.classList.add("flipped");
            break;
          case "ArrowRight":
          case "d":
            game.mario.directionX = 2;
            game.mario.element.classList.remove("flipped");
            break;
        }
      }
    });

    window.addEventListener("keyup", (event)=>{
      const key = event.key;
        const possibleKeystrokes = [
          "ArrowLeft",
          "ArrowRight",
          " ",
          "a",
          "d"
        ];
    
        if (possibleKeystrokes.includes(key)) {
          event.preventDefault();
          switch(event.key){
            case "ArrowLeft" || "a":
              game.mario.directionX = 0;
              break;
            case "ArrowRight" || "d":
              game.mario.directionX = 0;
              break;
          }
        }
    });
}
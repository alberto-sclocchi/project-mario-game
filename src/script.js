window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const instructionButton = document.getElementById("instructions-button");
  const mainPage = document.getElementById("main-page-button");
  const beginButton =  document.getElementById("begin-button");

  let game;

    startButton.addEventListener("click", ()=>{
      const parent = document.getElementById("player-name");
      parent.classList.toggle("player-name")
    });
    
    beginButton.addEventListener("click", ()=>{
      const playerName = document.getElementById("player");
      const isUsernameCorrect = confirm (`Is ${playerName.value} the right username?`);

      if(playerName.value && isUsernameCorrect){
        const usernamePar = document.getElementById("username-par");
        usernamePar.innerHTML = `${playerName.value}`;
        startGame();
      } else if (!playerName.value) {
        const parent = document.getElementById("game-intro");
        const invalidUser = document.createElement("h3");
        invalidUser.innerHTML = "Invalid Username";
        invalidUser.style.color = "red";
        parent.appendChild(invalidUser);

        setTimeout(()=>{
          invalidUser.style.display = "none"
        }, 2000)
      }
    });
    
    mainPage.addEventListener("click", ()=>{
      location.reload();
    });

    restartButton.addEventListener("click", ()=>{
      startGame();
    });

    instructionButton.addEventListener("click",()=>{
      const parent = document.getElementById("instructions");
      parent.classList.toggle("instructions")
    });
    
    function startGame(){
      game = new Game();
      game.start();
      game.backgroundMusic.play();

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
              case "ArrowLeft":
              case "a":
                game.mario.directionX = 0;
                break;
              case "ArrowRight":
              case "d":
                game.mario.directionX = 0;
                break;
            }
          }
      });
    }
}
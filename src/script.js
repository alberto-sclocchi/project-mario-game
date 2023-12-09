window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const instructionButton = document.getElementById("instuctions-button");

  let game;

    startButton.addEventListener("click", ()=>{
      startGame();
    });
    
    restartButton.addEventListener("click", ()=>{
      location.reload();
    });
    
    function startGame(){
      game = new Game();
      game.start();
      game.backgroundMusic.play();
    }

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

      instructionButton.addEventListener("click",()=>{
        console.log("hi");
        const parent = document.getElementById("instructions");

        // const instructions = document.createElement("p");
        // instructions.innerHTML = "Hi there! It's Mario. Make sure to jump over the mushrooms 🍄. If you make me hit it, I will lose a life ❤️. Be careful the mushrooms will go faster and get ready for the adventure."      

        // parent.appendChild(instructions);

        parent.classList.toggle("instructions")

       
      });
  
      if (possibleKeystrokes.includes(key)) {
        event.preventDefault();
        switch(key){
          case " ":
          case "ArrowUp":
            game.mario.jump();
            game.jumpSound.play();
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
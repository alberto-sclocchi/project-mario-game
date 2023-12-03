window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const instructionButton = document.getElementById("instruction-button");
  let game = new Game(); 

    startButton.addEventListener("click", ()=>{
        game.start();
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
          case " " || "ArrowUp":
            game.mario.jump();
            break;
          case "ArrowLeft" || "a":
            game.mario.directionX = -2;
            game.mario.element.classList.add("flipped");
            break;
          case "ArrowRight" || "d":
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
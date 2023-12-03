class Mushroom {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.bottom = 62;
        this.width = 40;
        this.height = 40;
        this.right = 0;
        this.element = document.createElement("img");
        
        this.element.src = "./images/mushroom.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.right = `${this.rigth}px`;
        this.element.style.bottom = `${this.bottom}px`;

        this.gameScreen.appendChild(this.element);
    }

    updatePosition(){
        this.element.style.right = `${this.right}px`;
    }

    move(){
        this.right += 3;

        this.updatePosition();
    }
}
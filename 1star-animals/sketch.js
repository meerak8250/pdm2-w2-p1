let animal1;
let bear;
let cat;
let monkey;

class Animal {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }

    display() {
        image(this.image, this.x, this.y);
    }
}
function preload() {
    bear = loadImage("assets/bear.jpg")
    cat = loadImage("assets/cat.jpg")
    monkey = loadImage("assets/monkey.jpg")
}

function setup() {
    createCanvas(400, 400);
    bear = new Animal(bear);
    cat = new Animal(cat);
    monkey = new Animal(monkey);
}

function draw() {
    background(255);
    bear.display();
    cat.display();
    monkey.display();
}

function keyPressed() {
    // TODO move the animal in response to the WASD keys
    if (key === "w") {
        bear.moveY(-10);
        cat.moveY(-10);
        monkey.moveY(-10);
    } else if (key === "s") {
        bear.moveY(10);
        cat.moveY(10);
        monkey.moveY(10);
    } else if (key === "a") {
        bear.moveX(-10);
        cat.moveX(-10);
        monkey.moveX(-10);
    } else if (key === "d") {
        bear.moveX(10);
        cat.moveX(10);
        monkey.moveX(10);
    }
}
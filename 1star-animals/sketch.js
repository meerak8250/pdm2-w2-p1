//let animal1;
let bear;
let cat;
let monkey;

class Animal {
    x;
    y;
    image;

    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }

    display() {
        image(this.image, this.x, this.y);
    }

    moveX(amount) {
        this.x += amount;
    }

    moveY(amount) {
        this.y += amount;
    }
}

function preload() {
    bear = new Animal(100, 100, loadImage("assets/bear.jpg"));
    cat = new Animal(200, 100, loadImage("assets/cat.jpg"));
    monkey = new Animal(300, 100, loadImage("assets/monkey.jpg"));
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    bear.display();
    cat.display();
    monkey.display();
}

function keyPressed() {
    // Move the animal in response to the WASD keys
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


//let animal1;
let bear;
let cat;
let monkey;

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
        animal1.moveY(-10);
    } // etc
}
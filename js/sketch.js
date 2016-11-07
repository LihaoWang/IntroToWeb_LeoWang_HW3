r = 180;
g = 180;
b = 180;
speed = 0;
state = 'noball'

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(r, g, b);
    textSize(30);
    textAlign(CENTER);
    text("blue", 50, 250);
    text("red", 150, 250);
    text("purple", 250, 250);
    text("pink", 350, 250);
    text("green", 450, 250);
    for (var i = 0; i <= width; i += 100) {
        stroke(0);
        line(i, 0, i, width);
    }
    if (mouseX >= 0 && mouseX <= 100) {
        r = 51;
        g = 204;
        b = 255;
    }
    if (mouseX >= 100 && mouseX <= 200) {
        r = 204;
        g = 51;
        b = 0;
    }
    if (mouseX >= 200 && mouseX <= 300) {
        r = 255;
        g = 0;
        b = 255;
    }
    if (mouseX >= 300 && mouseX <= 400) {
        r = 255;
        g = 204;
        b = 255;
    }
    if (mouseX >= 400 && mouseX <= 500) {
        r = 102;
        g = 255;
        b = 102;
    }
    if (state == 'ball') {
        ellipse(250, speed, 30, 30);
        ellipse(50, speed, 30, 30);
        ellipse(150, speed, 30, 30);
        ellipse(350, speed, 30, 30);
        ellipse(450, speed, 30, 30);
        speed = speed + 2;
        if (speed > 550) {
            speed = 0;
        }
    }
}

function mousePressed() {
    state = 'ball'
}
console.log("hello from reading from js");

var bg;
var img;

function setup() {
	var myCanvas = createCanvas(800, 250);
	//link to id mysketch from header tag
	myCanvas.parent('mySketch');
    bg = loadImage("js/florence.jpg");
img = loadImage("js/moon.png");
    noCursor();
}

function draw() {
background(bg);
image(img, mouseX, mouseY);
print(keyIsPressed);
if (mouseIsPressed) {
    image(img,0,0);
    filter(POSTERIZE,7);
} else {
    image(img,0,0);
}
print(mouseIsPressed)
}

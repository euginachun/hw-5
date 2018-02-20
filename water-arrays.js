var x = [];
var y = [];
var ySpeed = [];

x[0] = 10;
y[0] = 10;
ySpeed[0] = 5;


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)

for (var index = 0; index < 100; index = index + 1) {
  x[index] = 223;
  y[index] = 200
  ySpeed[index] = random(5,8);
}
}

function draw() {
  background(0);
  noStroke();
  
  //pipe
  fill(255);
  rect(0, 200, 220, 20);
  
  //drips
	ellipse(200+x, 200+y, 10);
  for (var index = 0; index < 100; index = index + 1) {
    ellipse(x[index], y[index],10);
    y[index] = y[index] + ySpeed[index];

	
    
    if (y[index] > height*2) {
    // reset
    y[index] = 220;
      
  
    }
  }
}

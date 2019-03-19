function setup() {
  // put setup code here
  createCanvas(1000, 1000);
}
var x=90;
var y= 90;

function draw() {
  // put drawing code here
  background(100, 200, 200,30);
  var objekt = ellipse(mouseX,mouseY,x,y);
  fill(100);




}


function mouseDragged() {
  x = x + 5;
  y = y + 5;
  if (x > 400 || y>400) {
    x = 0;
    y = 0;
  }
}



console.log('test');

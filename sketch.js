// Start of sketch
var hit = false;
var hit2 = false;
var hit3 = false;
var hit4 = false;
var hit5 = false;
var hit6 = false;
var hit7 = false;
var playerx = 0
var playery = 0
var enemyx = 400;
var enemyy = 400;
var enemy2x = 0;
var enemy2y = 400;
var enemy3x = 400;
var enemy3y = 0;
var enemy4x = 160;
var enemy4y = 160;
var enemy5x = 400;
var enemy5y = 240;
var enemy6x = 0;
var enemy6y = 240;
var enemy7x = 160;
var enemy7y = 0;
var leftWall = 0;
var rightWall = 400;
var rightWall2 = 440;
var topWall = 0;
var bottomWall = 400;
var bottomWall2 = 440
var score = 100
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 3;
  cnv.position(x, y);
}

function setup() {
frameRate(15);
cnv = createCanvas(481, 481);
centerCanvas();
}

function windowResized() {
  centerCanvas();
}

function draw() {
background(250);
xc = constrain(playerx, leftWall, rightWall2);
yc = constrain(playery, topWall, bottomWall2);
        xe = constrain(enemyx, leftWall, rightWall);
        ye = constrain(enemyy, topWall, bottomWall);
        xe2 = constrain(enemy2x, leftWall, rightWall);
        ye2 = constrain(enemy2y, topWall, bottomWall);
        xe3 = constrain(enemy3x, leftWall, rightWall);
        ye3 = constrain(enemy3y, topWall, bottomWall);
        xe4 = constrain(enemy4x, leftWall, rightWall);
        ye4 = constrain(enemy4y, topWall, bottomWall);
				xe5 = constrain(enemy5x, leftWall, rightWall);
        ye5 = constrain(enemy5y, topWall, bottomWall);
				xe6 = constrain(enemy6x, leftWall, rightWall);
        ye6 = constrain(enemy6y, topWall, bottomWall);
				xe7 = constrain(enemy7x, leftWall, rightWall);
        ye7 = constrain(enemy7y, topWall, bottomWall);

        
for (var x = 0; x <= width; x += 40) {
for (var y = 0; y <= height; y += 40) {
stroke(0);
strokeWeight(1);
line(x, 0, x, height);
line(0, y, width, y);
}
}
var player = rect(xc, yc, 40, 40);
        fill('red');
        var enemy = rect(xe, ye, 80, 80);
        var enemy2 = rect(xe2, ye2, 80, 80);
        var enemy3 = rect(xe3, ye3, 80, 80);
        var enemy4 = rect(xe4, ye4, 80, 80);
				fill('purple');
				var enemy5 = rect(xe5, ye5, 80, 80);
				fill('pink');
				var enemy6 = rect(xe6, ye6, 80, 80);
				fill('orange');
				var enemy7 = rect(xe7, ye7, 80, 80);
fill(0);
textSize(30);
text (score, 362, 30);

hit = collideRectRect(xc,yc,40,40,xe,ye,80,80);
        hit2 = collideRectRect(xc,yc,40,40,xe2,ye2,80,80);
        hit3 = collideRectRect(xc,yc,40,40,xe3,ye3,80,80);
        hit4 = collideRectRect(xc,yc,40,40,xe4,ye4,80,80);
				hit5 = collideRectRect(xc,yc,40,40,xe5,ye5,80,80);
				hit6 = collideRectRect(xc,yc,40,40,xe6,ye6,80,80);
				hit7 = collideRectRect(xc,yc,40,40,xe7,ye7,80,80);
	
print("your hit " + hit);
        print("your hit2 " + hit2);
        print("your hit3 " + hit3);
        print("your hit4 " + hit4);
				print("your hit5 " + hit5);
				print("your hit6 " + hit6);
				print("your hit7 " + hit7);

if((hit)||(hit2)||(hit3)||(hit4)||(hit5)||(hit6)||(hit7)){ //change color!
fill('black');
textSize(30);
text('Your Hit', 10, 30);
                score--;
                
                
} 
        else{
fill('green');
}

// Jiggling randomly on the horizontal axis
	// Moving up at a constant speed
  enemy5x = xe5 + random(-80, 80);
	enemy6x = xe6 + random(-80, 80);
	enemy7x = xe7 + random(-80, 80);
// Jiggling randomly on the vertical axis
  // Moving up at a constant speed
  enemy5y = ye5 + random(80, -80);
	enemy6y = ye6 + random(80, -80);
	enemy7y = ye7 + random(80, -80);

if (score <= 0) {
	textSize(30);
	fill('maroon');
  text('Your Dead, F5 to restart', 60, 200);
}
else {
	text('', 200,200);
}
}

function keyPressed() {
if (keyCode === UP_ARROW) {
		playery = yc - 40;
                enemyy = ye + 80;
                enemy2y = ye2 - 160;
                enemy3y = ye3 + 240;
                enemy4y = ye3 - 320;
		score+=1;
} else if (keyCode === DOWN_ARROW) {
		playery = yc + 40;
                enemyy = ye - 80;
                enemy2y = ye2 + 160;
                enemy3y = ye3 - 240;
                enemy4y = ye4 + 320;
		score+=1;
}
if (keyCode === LEFT_ARROW) {
		playerx = xc - 40;
                enemyx = xe + 80;
                enemy2x = xe2 - 160;
                enemy3x = xe3 + 240;
                enemy4x = xe4 - 320;
                score+=1;
                
} else if (keyCode === RIGHT_ARROW) {
		playerx = xc + 40;
                enemyx = xe - 80;
                enemy2x = xe2 + 160;
                enemy3x = xe3 - 240;
                enemy4x = xe4 + 320;
		score+=1;
}


}       
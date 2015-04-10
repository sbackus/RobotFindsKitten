var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var keys = [];

var width = 500, height = 400, speed = 5

var robot = {
	x: 10,
	y: 10,
	width: 20,
	height: 20
};

window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false);


function game(){
	update();
	render();
}

function update(){
	if(keys[38]) robot.y-=speed;
	if(keys[40]) robot.y+=speed;
	if(keys[37]) robot.x-=speed;
	if(keys[39]) robot.x+=speed;

	if(robot.x < 0) robot.x = 0;
	if(robot.y < 0) robot.y = 0;
	if(robot.x > width-robot.width) robot.x = width-robot.width;
	if(robot.y > height-robot.height) robot.y = height-robot.height;

}

function render(){
	context.clearRect(0, 0, width, height);
	context.fillRect(robot.x, robot.y, robot.width, robot.height)
}

setInterval(function(){
	game();
}, 1000/60)
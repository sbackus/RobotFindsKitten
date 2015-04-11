var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var keys = [];

var width = 500, height = 400, speed = 5

var robot = {
	x: 10,
	y: 10,
	width: 20,
	height: 20,
	draw: function(){
		context.fillStyle = "black"
		context.fillRect(this.x, this.y, this.width, this.height)
	},
	update: function(){
		if(keys[38]) this.y-=speed;
		if(keys[40]) this.y+=speed;
		if(keys[37]) this.x-=speed;
		if(keys[39]) this.x+=speed;

		if(this.x < 0) this.x = 0;
		if(this.y < 0) this.y = 0;
		if(this.x > width-this.width) this.x = width-this.width;
		if(this.y > height-this.height) this.y = height-this.height;
	}
};

var box = {
	x: Math.random() * width,
	y: Math.random() * height,
	width: 20,
	height: 20,
	draw: function(){
		context.fillStyle = "blue"
		context.fillRect(this.x, this.y, this.width, this.height)
	},
	touching: function(other){
		return !(this.x > other.x + other.width ||
			this.x + this.width < other.x ||
			this.y > other.y + other.height ||
			this.y + this.height < other.y);
	}
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
	robot.update();
	if (box.touching(robot)) {
		box.x = Math.random() * width;
		box.y = Math.random() * height;
	}
}

function render(){
	context.clearRect(0, 0, width, height);
	robot.draw();
	box.draw();
}

setInterval(function(){
	game();
}, 1000/60)
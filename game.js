var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var keys = [];

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
	if(keys[38]) console.log("up")
}

function render(){

}

setInterval(function(){
	game();
}, 1000/30)
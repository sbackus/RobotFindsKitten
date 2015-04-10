var canvas = document.getElementById("gameCanvas");
var context = document.getContext("2d");

var keys = [];

window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false);

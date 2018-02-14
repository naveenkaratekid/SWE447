var rotationAccess;
var xAxis = [1,0,0];// JavaScript Document
var yAxis = [0,1,0];

function init() {
	
	document.getElementById("xButton").onclick = function(){
		rotationAccess=xAxis
	}
}

function render(){
	
	ms.rotate(speed*angle, rotationAccess)
}
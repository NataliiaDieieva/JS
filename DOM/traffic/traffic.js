var lights;

lights = document.getElementsByClassName('lights');

/*
Implemented example of traffic-light's work.
The whole traffic's loop takes 60 second:
20s-red ligth, 3s-red and yellow, 
34s-green(including blinking green), 3s-yellow.
Then loop starts again.
*/

function runTrafficLight(){
	runRed();
	setTimeout(runYellow, 20*1000);
	setTimeout(runGreen, 23*1000);
	setTimeout(runYellow, 57*1000);
} 

function runRed() {
	lights[1].style.backgroundColor = "#2f270b";
	lights[0].style.backgroundColor = "red";
}

function runYellow() {
	lights[2].style.backgroundColor = "#031b04";
	lights[1].style.backgroundColor = "yellow";
}

function runGreen() {
	var i = 0, color = ["green","#031b04"];
	lights[0].style.backgroundColor = "#320707";
	lights[1].style.backgroundColor = "#2f270b";
	lights[2].style.backgroundColor = "green";

	setTimeout(function(){
		var tr = setInterval(blink,1000);
		setTimeout(function (){
			clearInterval(tr);
		},7*1000)
	},27*1000);
	

	function blink() {
		i ^= 1;
		lights[2].style.backgroundColor = color[i];
	} 
}


( function() {
	runTrafficLight();
	setInterval(runTrafficLight, 60*1000);
})()



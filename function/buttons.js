var n, button, text, p, btns;
n = prompt("Set number of button","10");
n = (n == null) ? 10 : n;


/* 

Create n buttons dynamic.
Use <br> and <p> for better design.
Set property button.count for counter.

*/
( function() {

	for(var i = 0; i < n; i++) {

		button = document.createElement("button");
		button.count = 0;
		button.innerHTML = "button" + (i + 1);
		document.body.appendChild(button);

		text = document.createElement("br");
		document.body.appendChild(text);

		p = document.createElement("p");
		document.body.appendChild(p);
	}

}() )


btns = document.getElementsByTagName("button");



/* 

Add events to buttons.
Count number of cLicks for each button.
Display all counters in a minute.

*/
( function() {

	for(var i = 0; i < n; i++) {
		btns[i].addEventListener("click", function() {
				console.log(this.innerHTML);
				this.count++;
				console.log(this.count);
			}
		);
	}

	setInterval( function () {
		for(var i = 0; i < n; i++) {
			console.log("button" + (i + 1) + " is clicked " +
			btns[i].count + " times");
		}
	}, 60*1000);


}() )



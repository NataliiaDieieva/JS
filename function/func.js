var res1, res2, btn, 
	counter1 = makeIncrement(), 
	counter2 = makeDecrement();

res1 = document.getElementById("inc");
res2 = document.getElementById("dec");
btn = document.getElementById("btn");
btn.addEventListener('click',  out);

console.log("Pow() examples:", 
	"\n\t pow(5,3)-", pow(5,3),
	"\n\t powDec(12.2,2)-", powDec(12.2,2),
	"\n\t powReq(2,6)-", powReq(2,6));


function pow(x, n) {
	var result = 1;

	for ( var i = 0; i < n; i++ ) {
		result *= x;
	}

	return result;
}

function powDec(x, n) {
	
	return pow(x, n).toFixed(3);
}

function powReq(x, n) {

	if ( n != 0 ){
		x *= powReq(x, n-1) ;
	} else {
		x = 1;	
	}
	
	return x;
}


function makeIncrement() {
	var i = 0;

	return  function() {

		return i++;

	};
}

function makeDecrement() {
	var i = 10;

	return  function() {

		return i--;

	};
}


function out() {
	res1.innerHTML = counter1(),
	res2.innerHTML = counter2();
}
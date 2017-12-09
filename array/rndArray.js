var generatedArray, number, index;
generatedArray = createArray(20);

results = document.getElementsByClassName('result');
results[0].innerHTML = "Generated array: " + generatedArray;
results[1].innerHTML = "Sort array by random way: " + sortRandom(generatedArray);
number = createRandomNumber(generatedArray);
index = generatedArray.indexOf(number);
results[2].innerHTML = "Random number in array: " + number +
						" with index - " + index;
results[3].innerHTML = "Sort array towards generated element: " + 
							sortFromRandomNumber(generatedArray,index);


function makeRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function createArray(n) {
	var arr = [];

	for ( var i = 0; i < n; i++) {
		arr[i] = makeRandom(1,21);
	}

	return arr;
}

function sortRandom(arr) {
	return arr.sort(function(a,b) {
		return makeRandom(-1, 2);
	})
}


function createRandomNumber(arr) {
	var number = makeRandom(1,21);
	if ( arr.indexOf(number) > -1){
		return arr[number];
	} else {
		return number = arr[arr.length/2];
	}	
}

function sortFromRandomNumber(arr, value) {
	var res1, res2, result;
	res1 = arr.slice(0,value);
	res1.sort(sortDecrease);
	res2 = arr.slice(value + 1);
	res2.sort(sortIncrease);
	result = res1.concat(arr[value]);
	result = result.concat(res2);
	return result;
}


function sortIncrease(a, b) {
	return a - b;
}

function sortDecrease(a, b) {
	return b - a ;
}
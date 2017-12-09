var firstArray, secondArray, str, answer, first, last;
firstArray = createArray(15);
secondArray = createArray(10);
str = "Write 1 for sort descending or 0 for sort ascending sort";
answer = prompt(str, "1");
answer = (answer == null) ? 1 : +answer;
console.log(answer);
first = findFirstNegative(secondArray);
last = findLastNegative(secondArray); 


results = document.getElementsByClassName('result');
results[0].innerHTML = "Generated array: " + firstArray;
results[1].innerHTML = "Sorted array: " + sortArray(firstArray, answer);
results[2].innerHTML = "Other array: " + secondArray;
results[3].innerHTML = "First negative element " + secondArray[first] + " with index = " + first;
results[4].innerHTML = "Last negative element " + secondArray[last] + " with index = " + last;
results[5].innerHTML = "Sorted from first to last negative elements in array: " + 
											sortPart(secondArray, first, last);




function makeRandom(min, max) {

	return Math.floor(Math.random() * (max - min)) + min;

}

function createArray(n) {
	var arr = [];

	for ( var i = 0; i < n; i++) {
		arr[i] = makeRandom(-20,20);
	}

	return arr;
}


/*Sort array arr depending on variant.

@param {number} variant takes two values: 
			1 for  descending sort;
			0 for  ascending sort.
Default value - 1.
*/

function sortArray(arr, variant) {

	if (variant) {

		arr.sort(sortDescending);

	} else {

		arr.sort(sortAscending);

	}

	return arr;
}

function sortAscending(a, b) {

	return a - b;

}

function sortDescending(a, b) {

	return b - a;

}


/*Sort array arr between first and last 
negative numbers from array (not including them).

@param {number} begin for first negative number index.
@param {number} end for last negative number index.
*/

function sortPart(arr, begin, end) {

	var part = arr.slice(begin + 1, end);
	part = sortArray(part, 0);
	arr.splice(begin + 1, part.length, part);

	return arr;

}

function findFirstNegative(arr) {

	for ( var i = 0; i < arr.length; i++) {

		if ( arr[i] < 0) {
			return i;
		}

	}

}


function findLastNegative(arr) {

	for ( var i = arr.length - 1; i >=0; i--) {

		if ( arr[i] < 0) {
			return i;
		}
	}

}
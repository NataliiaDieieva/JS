var  firstArray, secondArray, results;

firstArray = createArray(15);
secondArray = createArray(10);
results = document.getElementsByClassName('result');

results[0].innerHTML = "Generated array: " + firstArray;
results[1].innerHTML = "There is no repeated values in array: " + isUnique(firstArray);
results[2].innerHTML = "Repeated values in array: " + findEqual(firstArray);
results[3].innerHTML = "There is " + findNumberOfDifferent(firstArray) + " different values in array";
results[4].innerHTML = "Longest increasing subsequence: " + 
						findLongIncreasSubsequence(firstArray);
results[5].innerHTML = "Second array: " + secondArray;
results[6].innerHTML = "Compare two arrays:<br>" + compareArray(firstArray , secondArray);
results[7].innerHTML = "Concat two arrays without iterance values: " + concatWithoutRepeat(firstArray , secondArray);


function makeRandom(min, max) {

	return Math.floor(Math.random() * (max - min)) + min;

}

function createArray(n) {
	var arr = [];

	for ( var i = 0; i < n; i++) {
		arr[i] = makeRandom(0,21);
	}

	return arr;
}


function isUnique(arr) {

	if( findEqual(arr).length ) {

		return false;

	} else {

		return true;

	}
}

function findEqual(arr) {
	var result = {};

	for ( var i = 0; i < arr.length; i++) {

		if ( arr.indexOf( arr[i], i + 1) > -1 ) {
			result[arr[i]] = true;
		}

	}

	return Object.keys(result);
}


function findNumberOfDifferent(arr) {
	
	return findDifferent(arr).length;

}

function findDifferent(arr) {
	var result = {};
	
	for ( var i = 0; i < arr.length; i++) {
			result[arr[i]] = true;
	}

	return Object.keys(result);
}


function findLongIncreasSubsequence(arr) {
	var result = [], current = [];
	
	for ( var i = 0; i < arr.length; i++) {

		if( arr[i] < arr[i+1] ) {

			current.push( arr[i] );

		} else {
			current.push( arr[i] );

			if (current.length > result.length) {
				result = current.slice();
			}
			
			current = [];
		}
		
	}

	return result;
}


function compareArray(arr1 , arr2) {
	var result = {};

	for ( var i = 0; i < arr2.length; i++) {

		if ( arr1.indexOf( arr2[i]) > -1 ) {
			result[arr2[i]] = true;
		}

	}

	return "There is " + Object.keys(result).length + " equal values: " + Object.keys(result);
}

function concatWithoutRepeat(arr1 , arr2) {

	return findDifferent( arr1.concat(arr2) );
	
}
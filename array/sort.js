var n, m, k, str, firstArray, secondArray, 
firstSequence, secondSequence, sortArray, sorted;
str = "Set first array's size";
n = prompt(str, "10");
n = (n == null) ? 10 : +n;
str = "Set second array's size";
m = prompt(str, "15");
m = (m == null) ? 15 : +m;
str = "Set k from 1 to " + n;
k = prompt(str, "5");
k = (k == null) ? 5 : +k;
firstArray = createArray(n);
secondArray = createArray(m);
firstSequence = [1, 2, 3, 4, 5, 6, 10, 15, 16];
secondSequence = [-1, 2, 7, 14, 40, 56];
sortArray = createArray(10);


results = document.getElementsByClassName('result');
results[0].innerHTML = "First array: " + firstArray;
results[1].innerHTML = "Second array: " + secondArray;
results[2].innerHTML = "Paste second array from k index in first: " + pasteFromK(firstArray, secondArray, k) ;
results[3].innerHTML = "First sequence: " + firstSequence;
results[4].innerHTML = "Second sequence: " + secondSequence;
results[5].innerHTML = "Concatenate sequence: " + concatSequence(firstSequence, secondSequence);
results[6].innerHTML = "Array for sort: " + sortArray;
results[7].innerHTML = "Descending selection sort:<br>" + sortSelectionDes(sortArray);
sorted = sortBubbleAs(sortArray);
results[8].innerHTML = "Ascending bubble sort:<br>" + " sorted array - " + sorted[0] + " - number of inversion - " + sorted[1];
results[9].innerHTML = "Ascending insertion sort:<br>" + sortInsertionAs(sortArray);

function makeRandom(min, max) { 

	return Math.floor(Math.random() * (max - min)) + min;

}

function createArray(n) {
	var arr = [];

	for ( var i = 0; i < n; i++) {
		arr[i] = makeRandom(0,31);
	}

	return arr;
}

 /*
 Concatenate two arrays arr1 and arr2 into one, including 
 the second array between k and k+1 elements from first array.

 Start counting k from 1 (not 0).
 */
function pasteFromK(arr1,arr2, k) {

	arr1.splice(k, 0, arr2);

	return arr1;
}


/*
 Concatenate two increasing sequence arr1 and arr2 
 into one without using additional array.
*/

function concatSequence(arr1, arr2) {

	return arr1.concat(arr2).sort(sortIncrease);
}

function sortIncrease(a, b) {

	return a - b;

}

/*
Next functions implement common sorting algorithms.
Use copy array to not change initial array.
*/

function sortSelectionDes(arr) {
	var max, temp, copy = arr.slice();

	
	for ( var i = 0; i < copy.length - 1; i++) {
		max = i;

		for ( var j = i + 1; j < copy.length; j++) {

			if ( copy[j] > copy[max]) {

				max = j;

			}
		}
			temp = copy[max];
			copy[max] = copy[i];
			copy[i] = temp;

	}

	return copy;
}


function sortBubbleAs(arr) {
	var temp, count = 0, copy = arr.slice(), result = [];

	for ( var i = 0; i < copy.length - 1; i++) {

		for ( var j = 0; j < copy.length - 1 - i; j++) {

			if ( copy[j] > copy[j+1]) {

				temp = copy[j];
				copy[j] = copy[j+1];
				copy[j+1] = temp;
				count++;

			}

		}

	}

	result = [copy, count];
	return result;
}


function sortInsertionAs(arr) {
	var temp, copy = arr.slice();

	for ( var i = 1; i < copy.length; i++) {

		for ( var j = 0; j < i ; j++) {

			if ( copy[j] > copy[i]) {

				temp = copy[j];
				copy[j] = copy[i];
				copy[i] = temp;

			}

		}

	}

	return copy;
}
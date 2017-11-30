var inArray = [ 1,101,-7,19,8,-5, -4, 63,-1,49,-7], initial, result, btns;

initial = document.getElementById('initial');
result = document.getElementById('result');
btns = document.getElementsByClassName('btn');

initial.innerHTML = "Initial Array: " + inArray;
btns[0].addEventListener('click', findNumberOfPositives);
btns[1].addEventListener('click', findNumberOfNegatives);
btns[2].addEventListener('click', findNumberOfAliquotSeven);
btns[3].addEventListener('click', findMinimumElementsNumber);
btns[4].addEventListener('click', findLastMinIndex);
btns[5].addEventListener('click', findFirstMaxIndex);

function findNumberOfPositives() {
	var count = 0;

	for ( var i = 0; i < inArray.length; i++ ) {

		if ( inArray[i] > 0 ) {
			count++;
		}	

	}

	return result.innerHTML = 'Number of positive elements:<br>' + count;
}

function findNumberOfNegatives() {
	var count = 0;

	for ( var i = 0; i < inArray.length; i++ ) {

		if ( inArray[i] < 0 ) {
			count++;
		}

	}

	return 	result.innerHTML = 'Number of negative elements:<br>' + count;
}


function findNumberOfAliquotSeven() {
	var count = 0;
	
	for ( var i = 0; i < inArray.length; i++ ) {
		if( inArray[i] % 7 == 0 ) {
			count++;
		}	

	}

	return result.innerHTML = 'Number of elements aliquot seven:<br>' + count;
}

function findMinimum() {
	var count = 0, minArray = [] ;

	for ( var i = 0; i < inArray.length; i++ ) {

		if ( i == 0 ) {

			if ( inArray[0] < inArray[1] ) {

				minArray.push( inArray[0] );
			}

		} else if ( i > 0 && i < inArray.length - 1) {

			 	if( (inArray[i] < inArray[i - 1]) && (inArray[i] < inArray[i + 1]) ) {

					minArray.push( inArray[i] );	
				}

		} else if ( inArray[inArray.length-1] < inArray[inArray.length-2]) {

					minArray.push( inArray[inArray.length - 1] );
				} 
	}
		
	return minArray;
}


function findMinimumElementsNumber() {
	

	return result.innerHTML = 'Number of minima elements:<br>' + 
							   findMinimum().length;			
}

function findLastMinIndex(){
	var arr = findMinimum();
	return result.innerHTML = 'Index of last minimal element:<br>' + 
							   inArray.lastIndexOf( arr[arr.length-1]);
}

function findFirstMaxIndex() {
	var index = 0;

	for (var i = 0; i < inArray.length; i++) {

		if ( i == 0 ) {

			if ( inArray[0] > inArray[1] ) {
				index = i;
				break;	
			}

		} else if ( i > 0 && i < inArray.length - 1) {

			 	if ( inArray[i] > inArray[i-1] && inArray[i] > inArray[i+1] ) {

					index = i;
					break;	
				}

		} else if ( inArray[inArray.length-1] > inArray[inArray.length-2]) {

					index = i;
				} 
	}

	return result.innerHTML = 'Index of first maximal element:<br>' + index;
}


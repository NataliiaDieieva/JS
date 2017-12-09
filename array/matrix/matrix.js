var elem, newRow, newCell, n, matrix = [], table, btns, zero, result;
n = prompt("Set matrix size","10");
n = (n == null) ? 10 : n;
matrix = createArray(n);


elem = document.createElement("table");
elem.id = "table";
elem.width = 250;
elem.border = 1;
createTable(n,matrix);
document.body.appendChild(elem);


zero = document.getElementById('zero');
zero.innerHTML = "There is " + countZeros(matrix) +" zeros in matrix"

table = document.getElementById('table');
result = document.getElementById('result');
btns = document.getElementsByClassName('btn');
btns[0].addEventListener('click', clear);
btns[1].addEventListener('click', findMax1);
btns[2].addEventListener('click', findMax2);
btns[3].addEventListener('click', findMax3);
btns[4].addEventListener('click', findMax4);
btns[5].addEventListener('click', findMax5);
btns[6].addEventListener('click', findMax6);
btns[7].addEventListener('click', findMax7);
btns[8].addEventListener('click', findMax8);
btns[9].addEventListener('click', findMax9);
btns[10].addEventListener('click', findMax10);



function makeRandom(min, max) {

	return Math.floor(Math.random() * (max - min)) + min;

}


function createArray(n) {
	var arr = [];

	for ( var i = 0; i < n; i++) {
		arr[i] = [];

		for ( var j = 0; j < n; j++) {
			arr[i][j] = makeRandom(0,51);
		}

	}

	return arr;
}


/*

Create table size nxn.
Fill in the table with array's arr values.

*/
function createTable(n, arr) {

	for (var i = 0; i < n; i++) {
		newRow = elem.insertRow(i);

		for (var j = 0; j < n; j++) {

			newCell = newRow.insertCell(j);
			newCell.innerHTML = arr[i][j];

		}

	}

}

/*

Count number of zeros in matrix.

*/

function countZeros(arr) {
	var counter = 0;

	for ( var i = 0; i < n; i++) {
		for ( var j = 0; j < n; j++) {

			if ( arr[i][j] == 0 ) {
				counter++;
			}

		}
	}

	return counter;
}

/*

Clear matrix field from colouring for better understanding
which certain part of matrix do you work with.

*/

function clear() {
	
	for ( var i = 0; i < n; i++) {
		for ( var j = 0; j < n; j++) {

				table.rows[i].cells[j].style.background = "white";

		}
	}

	return result.innerHTML = "";
}

/*

Next functions implement searching maximum in 
certain part of matrix.

Parts coincide with tasks in the picture.
*/

function findMax1() {
	var max = -1;

	for ( var i = 0; i < n; i++) {
		for ( var j = 0; j < n; j++) {

			if(j >= i) {

				table.rows[i].cells[j].style.background = "#DC143C";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				}

			}

		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}


function findMax2() {
	var max = -1;

	for ( var i = 0; i < n; i++) {
		for ( var j = 0; j < n; j++) {

			if(j <= i) {

				table.rows[i].cells[j].style.background = "#7B68EE";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				
				}
			
			}
		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}

function findMax3() {
	var max = -1;

	for ( var i = 0; i < n; i++) {
		for ( var j = 0; j < n; j++) {

			if( (i <= j) && (i <= (n - 1 - j)) ) {
				
				table.rows[i].cells[j].style.background = "#3CB371";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				}

			}

		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}

function findMax4() {
	var max = -1;

	for ( var i = 0; i < n; i++) {

		for ( var j = 0; j < n; j++) {

			if( (i >= j) && (i >= (n - 1 - j)) ) {

				table.rows[i].cells[j].style.background = "#F0E68C";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				}

			}

		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}

function findMax5() {
	var max = -1;

	for ( var i = 0; i < n; i++) {

		for ( var j = 0; j < n; j++) {

			if( (i <= j) && (i <= (n - 1 - j)) ||
				(i >= j) && (i >= (n - 1 - j)) ) {
				
				table.rows[i].cells[j].style.background = "#FFB6C1";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				}

			}

		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}

function findMax6() {
	var max = -1;

	for ( var i = 0; i < n; i++) {

		for ( var j = 0; j < n; j++) {

			if( (j <= i) && (j <= (n - 1 - i)) ||
				(j >= i) && (j >= (n - 1 - i)) ) {

				table.rows[i].cells[j].style.background = "#8FBC8F";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				}

			}

		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}

function findMax7() {
	var max = -1;

	for ( var i = 0; i < n; i++) {

		for ( var j = 0; j < n; j++) {

			if( (j <= i) && (j <= (n - 1 - i)) ) {

				table.rows[i].cells[j].style.background = "#4169E1";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				}

			}

		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}

function findMax8() {
	var max = -1;

	for ( var i = 0; i < n; i++) {

		for ( var j = 0; j < n; j++) {

			if( (j >= i) && (j >= (n - 1 - i)) ) {

				table.rows[i].cells[j].style.background = "#6B8E23";
				
				if (matrix[i][j] > max){
					max = matrix[i][j];
				}

			}

		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}

function findMax9() {
	var max = -1;

	for ( var i = 0; i < n; i++) {

		for ( var j = 0; j < n; j++) {

			if( i <= (n - 1 - j) ) {

				table.rows[i].cells[j].style.background = "#808080";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				}

			}

		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}

function findMax10() {
	var max = -1;

	for ( var i = 0; i < n; i++) {

		for ( var j = 0; j < n; j++) {
			if( i >= (n - 1 - j) ) {

				table.rows[i].cells[j].style.background = "#FFD700";
				
				if (matrix[i][j] > max) {
					max = matrix[i][j];
				}

			}
			
		}
	}

	return result.innerHTML = "Maximum in this part is: " + max;
}



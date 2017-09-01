
// cell size = 7px per 7px
const FIELD_SIZE = 50;
const CELL_SIZE = 7;
// var snackCell= document.querySelector('#snack li');

window.onload = startGame();
window.addEventListener('keydown', changeSnackDirection,  false);
// window.addEventListener();
// window.addEventListener();


class Snack {
	constructor() {
		this.score = 0;
		this.snackDeath = false;
		this.startGane = false;
		this.snackDirection = 'down';
		this.snackTailCoordinate = [[21, 21]];
		this.food = [Math.floor((Math.random() * 50) + 1)*CELL_SIZE, Math.floor((Math.random() * 50) + 1)*CELL_SIZE];
	}

	getInitPosition() {

	}
	getSpeed () {

	}
}

var snack = new Snack();

function startGame() {

	// Generate field
	var gameField = document.querySelector('.site-content .game-section .game-field');
	gameField.style.width = FIELD_SIZE*CELL_SIZE+'px';
	gameField.style.height = FIELD_SIZE*CELL_SIZE+'px';

	let fieldSize = FIELD_SIZE * CELL_SIZE;
	console.log(fieldSize);

	// snackTailController(snack.snackDirection);

	setInterval(function () { // TODO: death trigger
		// snackTailController(snack.snackDirection);

		// }
	}, 100);
}
function calcField(){

}
// 37 -left ;38 - up ;39 - right ;40 - down
function changeSnackDirection (e) {
	if (event.keyCode == 37){
		if (snack.snackDirection == 'up' || snack.snackDirection == 'down') {
			snack.snackDirection = 'left';
			snackMotionController(snack.snackDirection);
		}
	}
	if (event.keyCode == 38){
		if (snack.snackDirection == 'left' || snack.snackDirection == 'right') {
			snack.snackDirection = 'up';
			snackMotionController(snack.snackDirection);
		}
	}
	if (event.keyCode == 39){
		if (snack.snackDirection == 'up' || snack.snackDirection == 'down') {
			snack.snackDirection = 'right';
			snackMotionController(snack.snackDirection);
		}
	}
	if (event.keyCode == 40){
		if (snack.snackDirection == 'left' || snack.snackDirection == 'right') {
			snack.snackDirection = 'down';
			snackMotionController(snack.snackDirection);
		}
	}
}
function snackMotionController(e) {

	var oldTail = snack.snackTailCoordinate;
	console.log('begining: ' + oldTail[0]);

	let tailCell = document.createElement("li");
	let sneksHead = document.querySelector('#snack').getElementsByTagName('li')[0];

	if (e == 'up') {
		snack.snackTailCoordinate[0][1] -= CELL_SIZE; // y moove
	}
	if (e == 'right') {
		snack.snackTailCoordinate[0][0] += CELL_SIZE; // x moove
	}
	if (e == 'down') {
		snack.snackTailCoordinate[0][1] += CELL_SIZE; // y moove
	}
	if (e == 'left') {
		snack.snackTailCoordinate[0][0] -= CELL_SIZE; // x moove
	}
	//Generate tail
	for (var i = 0; i < snack.snackTailCoordinate.length; i++) {  // TODO: new block trigger
		if (i == 0) {
			sneksHead.style.top = snack.snackTailCoordinate[0][1] + 'px';
			sneksHead.style.left = snack.snackTailCoordinate[0][0] + 'px';
			console.log('begining: ' + oldTail[0]);
			console.log(snack.snackTailCoordinate[0]);
			// tail.appendChild(tailCell);
		}
		else {
			snack.snackTailCoordinate[i] = oldTail[i-1];
			console.log(oldTail);
			document.getElementById('snack').getElementsByTagName('li')[i].style.top = oldTail[i-1][0] + 'px';
			document.getElementById('snack').getElementsByTagName('li')[i].style.left = oldTail[i-1][1] + 'px';
		}
	}
	if (snack.food[0] == snack.snackTailCoordinate[0][0] && snack.food[1] == snack.snackTailCoordinate[0][1]) {
		generateNewFood();
	}
} // DONE
function snackTailController() {

	// moove snack;
	snackMotionController(snack.snackDirection);
	// if (snack.food = snack.)
	// let prevPosition

}

function snackEatController () {
	let tail = document.getElementById('snack');
	let tailCell = document.createElement("li");
	snack.score++;
	document.getElementById('score').innerHTML = snack.score;
	document.getElementById('snack').getElementsByTagName("li")[0];
	tail.appendChild(tailCell);
	snack.snackTailCoordinate.push(snack.snackTailCoordinate[snack.snackTailCoordinate.length-1]);
}

function generateNewFood(){
	snack.food = [Math.floor((Math.random() * 49) + 1)*CELL_SIZE, Math.floor((Math.random() * 49) + 1)*CELL_SIZE];
	var foodSelector = document.getElementById('food');
	console.log(foodSelector);
	foodSelector.style.top = snack.food[1] + 'px';
	foodSelector.style.left = snack.food[0] + 'px';
	console.log(snack.food);
}





// testing
snackEatController();
generateNewFood();

// // snackEatController();
snackTailController(snack.snackDirection);
snackTailController(snack.snackDirection);
snackTailController(snack.snackDirection);
snackTailController(snack.snackDirection);
// snackTailController(snack.snackDirection);
// snackTailController(snack.snackDirection);
// snackTailController(snack.snackDirection);
// snackTailController(snack.snackDirection);
// snackTailController(snack.snackDirection);

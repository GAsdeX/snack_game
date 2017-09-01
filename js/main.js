
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
		this.snackLength = 2;
		this.snackDeath = false;
		this.startGane = false;
		this.snackDirection = 'down';
		this.snackTailCoordinate = [21, 21];
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


	console.log(document.querySelector('#snack').getElementsByTagName("li")[0]);
	console.log(document.querySelector('#snack').getElementsByTagName("li")[1]);

	console.log(document.querySelector('#snack').getElementsByTagName("li")[2]);

	setInterval(function () { // TODO: death trigger
		snackTailController(snack.snackDirection);
		// if (snack.snackTailCoordinate[0] > fieldSize ||
		// 	snack.snackTailCoordinate[0] < 0 		 ||
		// 	snack.snackTailCoordinate[1] > fieldSize ||
		// 	snack.snackTailCoordinate[1] < 0) {
		//
		// 	console.log(snack.snackTailCoordinate);
		// 	snack.snackTailCoordinate[0] = 0;
		// 	snack.snackTailCoordinate[1] = 0;
		// 	snack.snackDeath =true;
		//
		// }
	}, 1000);
}
function calcField(){

}
// 37 -left ;38 - up ;39 - right ;40 - down
function changeSnackDirection (e) {
	if (event.keyCode == 37){
		if (snack.snackDirection == 'up' || snack.snackDirection == 'down') {
			snack.snackDirection = 'left';
			console.log(snack.snackDirection);
		}
	}
	if (event.keyCode == 38){
		if (snack.snackDirection == 'left' || snack.snackDirection == 'right') {
			snack.snackDirection = 'up';
			console.log(snack.snackDirection);
		}
	}
	if (event.keyCode == 39){
		if (snack.snackDirection == 'up' || snack.snackDirection == 'down') {
			snack.snackDirection = 'right';
			console.log(snack.snackDirection);
		}
	}
	if (event.keyCode == 40){
		if (snack.snackDirection == 'left' || snack.snackDirection == 'right') {
			snack.snackDirection = 'down';
			console.log(snack.snackDirection);
		}
	}
}
function snackMotionController(e) {
	if (e == 'up') {
		snack.snackTailCoordinate[1] -= CELL_SIZE; // y moove
		console.log(console.log(snack.snackDirection));
		console.log(snack.snackTailCoordinate);
	}
	if (e == 'right') {
		snack.snackTailCoordinate[0] += CELL_SIZE; // x moove
		console.log(console.log(snack.snackDirection));
		console.log(snack.snackTailCoordinate);
	}
	if (e == 'down') {
		snack.snackTailCoordinate[1] += CELL_SIZE; // y moove
		console.log(console.log(snack.snackDirection));
		console.log(snack.snackTailCoordinate);
	}
	if (e == 'left') {
		snack.snackTailCoordinate[0] -= CELL_SIZE; // x moove
		console.log(console.log(snack.snackDirection));
		console.log(snack.snackTailCoordinate);
	}
} // DONE
function snackTailController() {
	// moove snack;
	snackMotionController(snack.snackDirection);

	let tail = document.getElementById('snack');
	let tailCell = document.createElement("li");
	let sneksHead = document.querySelector('#snack li');
	// let prevPosition
	for (let i = 0; i < snack.snackLength; i++) {  // TODO: new block trigger
		if (i == 0) {
			// tailCell.appendChild(document.createTextNode("Four"));
			// console.log(tail);
			sneksHead.style.top = snack.snackTailCoordinate[1] + 'px';
			sneksHead.style.left = snack.snackTailCoordinate[0] + 'px';
			// tail.appendChild(tailCell);
		}
	}
}
function snackEatController () {
	document.getElementById('snack')
}


// cell size = 7px per 7px
const FIELD_SIZE = 50;
const CELL_SIZE = 7;
var SPEED = 400;
var snackMoton;


var gameController = function (_SPEED=SPEED) {
	clearInterval(snackMoton);
	if (_SPEED == 300) {
			snackMoton = setInterval(function(){
			snackTailController(snack.snackDirection);
			if (snack.snackDeath) {
				clearInterval(snackMoton);
				document.getElementById('game-over').classList.add('active')
			}
		}, _SPEED);
	} else {
			snackMoton = setInterval(function(){
			snackTailController(snack.snackDirection);
			console.log(_SPEED);
			if (snack.snackDeath) {
				clearInterval(snackMoton);
				document.getElementById('game-over').classList.add('active')
			}
		}, _SPEED);
	}
};

var getLiBlock = document.getElementById('snack').getElementsByTagName("li");

// listener
document.onload = startGame();
document.addEventListener('keydown', changeSnackDirection,  false);

class Snack {
	constructor() {
		this.score = 0;
		this.snackDeath = false;
		this.startGane = false;
		this.snackDirection = 'down';
		this.snackTailCoordinate = [[21, 28]];
		this.food = [Math.floor((Math.random() * 50) + 1)*CELL_SIZE, Math.floor((Math.random() * 50) + 1)*CELL_SIZE];
	}

	getFoodPosition () {
		this.food = [Math.floor((Math.random() * 49) + 1)*CELL_SIZE, Math.floor((Math.random() * 49) + 1)*CELL_SIZE];
		var foodSelector = document.getElementById('food');
		foodSelector.style.top = snack.food[1] + 'px';
		foodSelector.style.left = snack.food[0] + 'px';
		console.log(this.food);
	}
}
var snack = new Snack();

function startGame() {

	// Generate field
	var gameField = document.querySelector('.site-content .game-section .game-field');
	gameField.style.width = FIELD_SIZE*CELL_SIZE+'px';
	gameField.style.height = FIELD_SIZE*CELL_SIZE+'px';

	let fieldSize = FIELD_SIZE * CELL_SIZE;
	let tail = document.getElementById('snack');
	let tailCell = document.createElement("li");

	getLiBlock[0];
	tail.appendChild(tailCell);
	gameController();
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

	let oldTail = [];
	for (var i = 0; i < snack.snackTailCoordinate.length; i++) {
		// console.log(i);
		oldTail.push([]);
		for (var j = 0; j < snack.snackTailCoordinate[i].length; j++) {
			oldTail[i].push(snack.snackTailCoordinate[i][j]);
			// console.log(oldTail);
		}
	}

	let tailCell = document.createElement("li");
	let sneksHead = document.querySelector('#snack').getElementsByTagName('li')[0];

	if (e == 'up') {
		snack.snackTailCoordinate[0][1] -= CELL_SIZE; // y move
	}
	if (e == 'right') {
		snack.snackTailCoordinate[0][0] += CELL_SIZE; // x move
	}
	if (e == 'down') {
		snack.snackTailCoordinate[0][1] += CELL_SIZE; // y move
	}
	if (e == 'left') {
		snack.snackTailCoordinate[0][0] -= CELL_SIZE; // x move
	}
	//Generate tail
	for (var i = 0; i < snack.snackTailCoordinate.length; i++) {  // TODO: new block trigger
		if (i == 0) {
			sneksHead.style.top = snack.snackTailCoordinate[0][1] + 'px';
			sneksHead.style.left = snack.snackTailCoordinate[0][0] + 'px';
		}
		else {
			snack.snackTailCoordinate[i] = oldTail[i-1];
			document.getElementById('snack').getElementsByTagName('li')[i].style.top = oldTail[i-1][1] + 'px';
			document.getElementById('snack').getElementsByTagName('li')[i].style.left = oldTail[i-1][0] + 'px';
		}
	}
	if (snack.food[0] == snack.snackTailCoordinate[0][0] && snack.food[1] == snack.snackTailCoordinate[0][1]) {
		snackEatController();
	}
	isSnackDeath();
} // DONE
function snackTailController() {
	snackMotionController(snack.snackDirection);
}
function snackEatController () {
	let tail = document.getElementById('snack');
	let tailCell = document.createElement("li");
	snack.score++;
	document.getElementById('score').innerHTML = snack.score;
	tail.appendChild(tailCell);
	snack.snackTailCoordinate.push(snack.snackTailCoordinate[snack.snackTailCoordinate.length-1]);

	getLiBlock[document.querySelector('#snack li').childElementCount].style.top = snack.snackTailCoordinate[snack.snackTailCoordinate.length-1][1]+ 'px';
	getLiBlock[document.querySelector('#snack li').childElementCount].style.left = snack.snackTailCoordinate[snack.snackTailCoordinate.length-1][0]+ 'px';
	snack.getFoodPosition();
	gameController(SPEED - (10*snack.score) )
	// startInterval(1000);
	// GAME(1000);
}
function isSnackDeath() {
	if (snack.snackTailCoordinate[0][1] < 0 ||
		 snack.snackTailCoordinate[0][1] > 49 * CELL_SIZE ||
		snack.snackTailCoordinate[0][0] < 0 ||
		 snack.snackTailCoordinate[0][0] > 49 * CELL_SIZE ) {
		snack.snackDeath = true;
	}
	for (var i = 2; i < snack.snackTailCoordinate.length; i++) {
		if (snack.snackTailCoordinate[0][0] == snack.snackTailCoordinate[i][0] &&
			snack.snackTailCoordinate[0][1] == snack.snackTailCoordinate[i][1] ) {
			snack.snackDeath = true;
		}
	}
}

snack.getFoodPosition();

// testing
// snackEatController();

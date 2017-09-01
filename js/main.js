'use strict';
const FIELD_SIZE = 50;

// window.onload = startGame();
window.addEventListener('keydown', changeSnackDirection,  false);
// window.addEventListener();
// window.addEventListener();


class Snack {
	constructor() {
		this.snackLength = 1;
		this.snackDeath = false;
		this.snackDirection = 'up'
	}

	getInitPosition() {

	}
	getSpeed () {

	}
}

var snack = new Snack();

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

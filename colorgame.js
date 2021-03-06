var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var newPlayer = document.querySelector("#newPlayer");
var modeButtons = document.querySelectorAll(".mode");
var name = prompt("Please Enter Your Name");

init();

function init() {
	setupModeButtons();
	setupSquareListeners();
	reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquareListeners() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor == pickedColor) {
				messageDisplay.textContent = "Great job, " + name + "!!!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Ooops!!! Please try again!";
			}
		});
	}
}

function reset() {
	// generate new colours
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colours display to match picked color
	colorDisplay.textContent = pickedColor;
	// change colours of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}
	// change body background
	h1.style.background = "steelblue";

	// change span to empty
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colours";
}

function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// Change all colours to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make array
	var arr = []
	// add num random colours to array
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor());
	}
	// return array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
resetButton.addEventListener("click", function () {
	reset();
});
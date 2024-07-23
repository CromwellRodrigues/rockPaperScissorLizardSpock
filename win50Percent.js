console.log("Computer wins 50 percent of the time");

// GLOBAL VARIABLES

let gameOn = true;

let computerInput;

let gamesPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let playerLoses = 0;
let computerLoses = 0;
let draws = 0;
let choicesArray = [];

// color to be used in the console.
let red = "\x1B[31m";
let blue = "\x1b[34m";
let pink = "\x1b[35m";
let cyan = "\x1b[36m";
let yellow = "\x1b[43m";
let green = "\x1b[36m%s\x1b[0m";
let lightGreen = "\x1b[92m";
let blackBackground = "\x1b[40;38;5;82m";
let greenBackground = "\x1b[30;48;5;82m";

let style = ` 
    color:green; 
    font-size:20px; 
    background-color:black; 
`;
const options = ["rock", "paper", "scissors", "spock", "lizard"];

// FUNCTIONS

//  the function will compare the choices of the player and computer and  will return -1 if player loses, 1 if player wins and 0 if its a draw.
// if player puts anything else besides rock, paper or scissors. it will ask to refresh.
function getWinner(playerMove, computerMove) {
	if (playerMove === computerMove) {
		console.log(`${pink} Its a draw. 😁`);
		return 0;
	}

	// rules of the game : Scissors cuts Paper, Paper covers Rock, Rock crushes Lizard, Lizard poisons Spock, Spock smashes Scissors, Scissors decapitates Lizard, Lizard eats Paper, Paper disproves Spock, Spock vaporizes Rock, Rock crushes Scissors
	if (
		(playerMove === "rock" && computerMove === "paper") ||
		(playerMove === "rock" && computerMove === "spock") ||
		(playerMove === "scissors" && computerMove === "rock") ||
		(playerMove === "scissors" && computerMove === "spock") ||
		(playerMove === "paper" && computerMove === "scissors") ||
		(playerMove === "paper" && computerMove === "lizard") ||
		(playerMove === "spock" && computerMove === "lizard") ||
		(playerMove === "spock" && computerMove === "paper") ||
		(playerMove === "lizard" && computerMove === "rock") ||
		(playerMove === "lizard" && computerMove === "scissors")
	) {
		console.log("Player loses 😞");
		return -1;
	} else if (
		(playerMove === "scissors" && computerMove === "paper") ||
		(playerMove === "scissors" && computerMove === "lizard") ||
		(playerMove === "paper" && computerMove === "rock") ||
		(playerMove === "paper" && computerMove === "spock") ||
		(playerMove === "rock" && computerMove === "scissors") ||
		(playerMove === "rock" && computerMove === "lizard") ||
		(playerMove === "spock" && computerMove === "scissors") ||
		(playerMove === "spock" && computerMove === "rock") ||
		(playerMove === "lizard" && computerMove === "spock") ||
		(playerMove === "lizard" && computerMove === "paper")
	) {
		console.log("Player wins 🏆");
		return 1;
	} else {
		if (userChoice(playerMove) === false) {
			console.log("enter correct options");
			gameOn = false;
			return false;
		}
	}
}

// computer will choose randomly from the range of options
function randomComputerMove() {
	let randomComputer = Math.floor(Math.random() * options.length);

	let randomComputerOption = options[randomComputer];
	// console.log(`Computer chose : ${randomComputerOption}`);
	return randomComputerOption;
}

// checks if userChoice is in the options array
function userChoice(itemChoice) {
	if (options.includes(itemChoice)) {
		gameOn = true;
		// console.log(itemChoice);
		return itemChoice;
	} else {
		return false;
	}
}
// checks if name does not have digit or symbols as the first character.

function validName(name) {
	let firstLetter = name.charAt(0);

	if (/[0-9!@#$%^&*(),.?!:;<=>[\]<>\/]/.test(firstLetter)) {
		console.log("No number or symbol allowed in first character");

		alert(
			"Please enter your name\nPsst.... Names can only start with letters.\nRestart to play."
		);
		gameOn = false;
		return false;
	} else if (/^[a-zA=Z]+$/.test(firstLetter)) {
		firstLetter = firstLetter.toUpperCase();
		restOfLetter = name.slice(1);
		fullName = firstLetter + restOfLetter;
		// console.log(fullName);
		return fullName;
	} else {
		console.log(name);
	}
}

// checks if the name is not more than 10 characters long
function nameLength(name) {
	if (name.length > 10) {
		alert(
			"Psst... name is too long.\n Only 10 characters please.\nRestart to play."
		);

		gameOn = false;
		return false;
	} else {
		return name;
	}
}

// CODE OUT OF THE GAME LOOP
console.clear();
console.log(
	"%cWelcome to the Game of Rock, Paper Scissors, Lizard and Spock",
	style
);

let userName = prompt(
	"Welcome to the Game of Rock, Paper Scissors, Lizard and Spock \n\n What is your name?"
);

userName = validName(userName);
if (userName) {
	userName = nameLength(userName);
}

// CODE FOR GAME LOOP

if (userName) {
	while (gameOn) {
		let userInput = prompt(
			`${userName},\nWhat would you like to choose : 'rock', 'paper' or 'scissors', 'lizard' or 'spock' ? : `
		);
		userInput = userInput.toLowerCase();

		computerInput = randomComputerMove();

		// to win half the time
		let winChance = Math.ceil(gamesPlayed / 2);

		if (gameOn && computerWins < winChance) {
			console.log(`Games played : ${gamesPlayed}`);
			console.log(`Computer wins : ${computerWins}`);

			if (userInput === "rock") {
				computerInput = "paper" || "spock";
				console.log(
					` computer wants to win - computer input : ${computerInput}`
				);
			} else if (userInput === "paper") {
				computerInput = "scissors" || "lizard";
				console.log(`computer wants to win -computer input : ${computerInput}`);
			} else if (userInput === "scissors") {
				computerInput = "rock" || "spock";
				console.log(
					`computer wants to win - computer input : ${computerInput}`
				);
			} else if (userInput === "lizard") {
				computerInput = "rock" || "scissors";
				console.log(
					`computer wants to win - computer input : ${computerInput}`
				);
			} else if (userInput === "spock") {
				computerInput = "lizard" || "paper";
				console.log(
					`computer wants to win - computer input : ${computerInput}`
				);
			} else {
				computerInput = randomComputerMove();
			}
		} else {
		}
		console.log(`${blue} Computer chose : ${computerInput}`);

		if ((userInput = userChoice(userInput))) {
			gameOn = true;

			console.log(`${pink}${userName}'s choice : ${userInput}`);
			let result = getWinner(userInput, computerInput);

			gamesPlayed += 1;

			if (result === 0) {
				draws += 1;
			} else if (result === -1) {
				playerLoses += 1;
				computerWins += 1;
			} else if (result === 1) {
				playerWins += 1;
				computerLoses += 1;
			}

			choicesArray.push({
				userInput,
				computerInput,
				playerWins,
				computerWins,
				gamesPlayed,
			});

			console.log(choicesArray);

			console.table(choicesArray);

			let winPercent = Math.round((computerWins * 100) / gamesPlayed);
			console.log(`Computer wins: ${winPercent}%`);
			alert(
				`${userName}, You chose : ${userInput} !
Computer chose : ${computerInput}\n
Games played : ${gamesPlayed}
${userName} Wins: ${playerWins}
Computer Wins : ${computerWins}
${userName} Loss: ${playerLoses}
Computer Loss : ${computerLoses}
Draws: ${draws}\n`
			);
		} else {
			alert("Refresh to continue...");
		}

		let stopGame = confirm("Do you want to continue? : ");

		if (!stopGame) {
			gameOn = false;
			console.log(`Good Bye, ${userName}!`);
			console.clear();
		}
	}
}

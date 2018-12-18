/*
p class="guesses"></p>
		<p class="lastResult"></p>
		<p class="lowOrHigh"></p>
*/

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
// lisan uue funktsiooni: võimalik mängu taastada pärast mängu läbimist
const resultReset = document.querySelector('.resultReset');
// loon uue muutuja
var results;


let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

console.log(randomNumber);

const checkGuess = () => {
	let userGuess = Number(guessField.value);

	if (guessCount === 1) {
		guesses.textContent = 'Eelnevad pakkumised: '
	}

	guesses.textContent += `${userGuess} `;

	if (results === userGuess) {
		guesses.style.backgroundColor = 'red';
		guesses.textContent = 'Ühte numbrit ei saa korduvalt pakkuda!';
	} 
	


	if (userGuess === randomNumber) {
		// siia kood, kui kasutaja arvab õigesti
		lastResult.textContent = 'Palju õnne sa võitsid!';
		lastResult.style.backgroundColor = 'green';
		lowOrHigh.textContent = '';
		resultReset.style.display = 'inline-block';
	} else if (guessCount === 10) {
		// siia kood, kui kasutaja paneb 10 korda mööda
		lastResult.textContent = 'Mäng läbi';
		resultReset.style.display = 'block';
	} else {
		lastResult.textContent = 'Vale vastus!';
		lastResult.style.backgroundColor = 'red';

		const lowOrHighText = 'Viimane pakkumine oli ';

		if (userGuess < randomNumber) {
			// liiga madal
			lowOrHigh.textContent = lowOrHighText + 'liiga madal';
		} else if (userGuess > randomNumber) {
			// liiga kõrge
			lowOrHigh.textContent = lowOrHighText + 'liiga kõrge';
		}
	}

	results = userGuess;
	guessCount++
	guessField.value = '';
	guessField.focus();
};

// loon funktsiooni mis resetib mängu
const reset = () => {
	guesses.textContent = '';
	lastResult.textContent = '';
	lowOrHigh.textContent = '';
	lowOrHighText = '';
	guessCount = 1;
	randomNumber = Math.floor(Math.random() * 100) + 1;
	resultReset.style.display = 'none';


}

guessSubmit.addEventListener('click', checkGuess);
// lisan reset nupule funktsiooni
resultReset.addEventListener('click', reset);
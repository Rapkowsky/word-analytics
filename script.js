const textAreaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

const inputHandler = () => {
	// input validation
	if (textAreaEl.value.includes("<script>")) {
		alert("You can't use <script> in your text");
		textAreaEl.value = textAreaEl.value.replace("<script>", "");
	}

	// determine new numbers
	let numberOfWords = textAreaEl.value.split(" ").length;
	if (textAreaEl.value.length === 0) {
		numberOfWords = 0;
	}
	const numberOfCharacters = textAreaEl.value.length;
	const twitterCharactersLeft = 280 - numberOfCharacters;
	const facebookCharactersLeft = 350 - numberOfCharacters;

	// add visual indicator if limit is exceeded
	if (twitterCharactersLeft < 0) {
		twitterNumberEl.classList.add("stat__number--limit");
	} else {
		twitterNumberEl.classList.remove("stat__number--limit");
	}

	if (facebookCharactersLeft < 0) {
		facebookNumberEl.classList.add("stat__number--limit");
	} else {
		facebookNumberEl.classList.remove("stat__number--limit");
	}
	// set new numbers
	wordsNumberEl.textContent = numberOfWords;
	charactersNumberEl.textContent = numberOfCharacters;
	twitterNumberEl.textContent = twitterCharactersLeft;
	facebookNumberEl.textContent = facebookCharactersLeft;
};

textAreaEl.addEventListener("input", inputHandler);

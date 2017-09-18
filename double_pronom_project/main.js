const singular_1 = "1_singular.png";
const singular_2 = "2_singular.png";
const singular_3 = "3_singular.png";
const plural_1 = "1_plural.png";
const plural_2 = "2_plural.png";
const plural_3 = "3_plural.png";

const gender_1 = "gender_1.png";
const gender_2 = "gender_2.png";
const gender_3 = "gender_3.png";

var decidedGender;
var decidedWho;
var decidedWhom;

var correctAnswer = [];

function start () {
	
	decidedGender = generateGender();
	decidedWho = generateWho();
	decidedWhom = generateWhom();
	
	while (isTheSamePerson()){				// for grammar reason some cases had to be excluded
		if (isThirdPerson()) {
			break;
		}
		decidedWho = generateWho();
	}
	
	addGenderToCorrectAnswer(decidedGender);
	addWhoToCorrectAnswer(decidedWho);
	addWhomToCorrectAnswer (decidedWhom);
}

function isTheSamePerson() {
	return (generateWho[0] === generateWhom[0]);
}

function isThirdPerson() {
	return (decidedWho.startsWith("3") || decidedWhom.startsWith("3")); // zmienić na generate... ?
}

function getGender () {
	
	var randomNumber = Math.random();
	
	if (randomNumber <= 0.33) {
		return gender_1;
	} else if (0.33 < randomNumber && randomNumber <= 0.66) { 
		return gender_2;
	} else if (0.66 < randomNumber) {
		return gender_3;
	}
}

function getPicture () { // zmienić nazwę!!! getPerson
	
	var randomNumber = Math.random();
	
	if (randomNumber <= 0.17) {
		return singular_1;
	} else if (0.17 < randomNumber && randomNumber <= 0.33) {
		return singular_2;
	} else if (0.33 < randomNumber && randomNumber <= 0.49) {
		return singular_3;
	} else if (0.49 < randomNumber && randomNumber <= 0.66) {
		return plural_1;
	} else if (0.66 < randomNumber && randomNumber <= 0.833) {
		return plural_2;
	} else if (0.83 < randomNumber) {
		return plural_3;
	}
}

function generateGender() {
	
	var gender = getGender();
	var genderElement = document.getElementById("gender_now");
	genderElement.src = "./pictures/" + gender;
	return gender;
}

function generateWho() {
	
	var who = getPicture();
	var genderElement = document.getElementById("who_now");
	genderElement.src = "./pictures/" + who;
	return who;

}

function generateWhom() {
	
	var whom = getPicture();
	var genderElement = document.getElementById("whom_now");
	genderElement.src = "./pictures/" + whom;
	return whom;
	
}

function addGenderToCorrectAnswer (gender) {
	
	if (gender === gender_1) {
		correctAnswer[2] = 'la ';
	} else if (gender === gender_2) {
		correctAnswer[2] = 'le ';
	} else if (gender === gender_3) {
		correctAnswer[2] = 'les ';
	}
}

function addWhoToCorrectAnswer (who) {
	if (who === singular_1) {
		correctAnswer[0] = 'je ';
		correctAnswer[4] = 'donne';
	} else if  (who === singular_2) {
		correctAnswer[0] = 'tu ';
		correctAnswer[4] = 'donnes';
	} else if  (who === singular_3) {
		correctAnswer[0] = 'il ';
		correctAnswer[4] = 'donne';
	} else if  (who === plural_1) {
		correctAnswer[0] = 'nous ';
		correctAnswer[4] = 'donnons';
	} else if  (who === plural_2) {
		correctAnswer[0] = 'vous ';
		correctAnswer[4] = 'donnez';
	} else if  (who === plural_3) {
		correctAnswer[0] = 'ils ';
		correctAnswer[4] = 'donnent';
	} 
}

function addWhomToCorrectAnswer (whom) {
	if (whom === singular_1) {
		correctAnswer[1] = 'me ';
	} else if (whom === singular_2) {
		correctAnswer[1] = 'te ';
	} else if (whom === singular_3) {
		correctAnswer[3] = 'lui ';
	} else if (whom === plural_1) {
		correctAnswer[1] = 'nous ';
	} else if (whom === plural_2) {
		correctAnswer[1] = 'vous ';
	} else if (whom === plural_3) {
		correctAnswer[3] = 'leur ';
	}
}

function validateForm() {
	var correctAnswerAsString = correctAnswer.join('');         //przydałoby się toLowerCase()
    var userAnswer = document.forms["writeAnswer"]["answer"].value;
    if (userAnswer === correctAnswerAsString) {
        alert("Bien fait!");
    } else {
		alert("T'as besoin d'apprendre un peu. La réponse correcte est: " + correctAnswerAsString);
	}
}

function addFrenchLetter (letter) {
	document.forms["writeAnswer"]["answer"].value += letter;
}


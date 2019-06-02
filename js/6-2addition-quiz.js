// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Defining Table
INPUT: 
	Get two numbers from firstNumber and secondNumber from the document
	Get the result typed from the input box
	
PROCESSING: 
	Add the two numbers store in answerKey
	Declare conditional if the sum is equal to the result then show if message otherwise show message from else
	
OUTPUT: Display message on the document
*/

const MAX = 100;
let firstNumber = Math.floor (Math.random() * Math.floor(MAX));
let secondNumber = Math.floor(Math.random() * Math.floor(MAX));
document.getElementById('firstNumber').innerHTML = firstNumber;
document.getElementById('secondNumber').innerHTML = secondNumber;

function checkAnswer() {
	//INPUT
	let firstOperating = parseInt(document.getElementById('firstNumber').innerHTML);
	let secondOperating = parseInt(document.getElementById('secondNumber').innerHTML);
	let result = parseInt(document.getElementById('answer').value);
	
	//PROCESSING
	let sum = firstOperating + secondOperating;
	let message = "";
	if(result == sum){
		 message = "Correct Good job!";
		 }
	else{
		message = "Sorry. That is incorrect. The answer is " + sum + ".";
	}
//OUTPUT
	document.getElementById("output").innerHTML = message;

}
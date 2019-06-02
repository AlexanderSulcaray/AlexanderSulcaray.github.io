// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Defining Table
INPUT: Get the 3 elements of complete Address from 3 different input boxes label x, y and z
OUTPUT: Display the 3 elements concatenated on the document
*/
function createAddress() {
	//INPUT
	let city = document.getElementById('city').value;
	let state = document.getElementById('state').value;
	let zipCode = document.getElementById('zipCode').value;
	//PROCESSING
	//OUTPUT
	document.getElementById('output').innerHTML = city + ", " + state + "  " + zipCode ;
}
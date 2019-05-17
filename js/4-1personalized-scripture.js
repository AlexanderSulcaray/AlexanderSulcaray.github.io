// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Defining Table
INPUT: Get name from input boxe label "name"
PROCESSING: Concatenate name to the scripture to be shown in output
OUTPUT: Declare that the scripture that will be shown in output will be equal to the concatenated scripture
*/
function showScripture() {
	//INPUT
	let name =document.getElementById("Name").value;
	//PROCESSING
		let output = ' 1 Behold, I speak unto you, ' + name +', a few words. Behold, thou art blessed, and art under no condemnation. But beware of pride, lest thou shouldst enter into temptation. 2 Make known thy calling unto the church, and also before the world, and thy heart shall be opened to preach the truth from henceforth and forever. Amen.'
	
	//OUTPUT
	const Scripture =document.getElementById('output')
	Scripture.innerHTML =output
}
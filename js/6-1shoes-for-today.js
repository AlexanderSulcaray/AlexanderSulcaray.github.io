// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;
/* Defining Table
INPUT: Get the weather from the selector
PROCESSING: Set Switch and the values of return for each selection
OUTPUT: Display on the document the returned value of each option contained on the variable "todayShoes" 
*/
function footwear() {
	//INPUT
	let todayShoes;
	let todayWeather = document.getElementById( 'weatherSelect').value;
	//PROCESSING
	switch (todayWeather) {
    case "a": 
      todayShoes = "The shoes you should wear today is: Sandals";
      break;
    case "b": 
      todayShoes = "The shoes you should wear today is: Galoshes";
      break;
    case "c":
      todayShoes = "The shoes you should wear today is: Boots";
      break;
    case "d":
      todayShoes = "The shoes you should wear today is: Shoes";
  }
	//OUTPUT
	document.getElementById('output').innerHTML = todayShoes;
}
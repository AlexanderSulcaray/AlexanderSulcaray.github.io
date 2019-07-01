/* Defining Table
INPUT: Get the current temperature and wind speed from two different input boxes
PROCESSING: Apply the formula of wind chill factor to code, using variables and creating functions
OUTPUT: Display the result of the equation of the windchill factor
*/
	function doInputOutput() {
	
	//INPUT
	let tempF = parseFloat(document.getElementById('temperature').value);
	let speed = parseFloat(document.getElementById('windSpeed').value);
	let output = windChill(tempF, speed);
	
	//OUTPUT
	document.getElementById('output').innerHTML = output;
	}

	//PROCESSING
	function windChill(tempF, speed) {
	if (tempF > 50 || speed < 3) {
		return "N/A";
	} 
		
	else {
	let output = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (tempF * Math.pow(speed, 0.16)));
	return "The windchill for today is "+ Math.round(output)+ "&deg (F)";
	}

	}


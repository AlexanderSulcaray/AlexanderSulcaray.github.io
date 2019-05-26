// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Defining Table
INPUT: Get the number of regular hours that an employee worked and the wage per hour
PROCESSING: Compute gross salary multiplying hours per wage.
Compute tax multiplying gross salary per tax percentage (15% in other words 0.15).
Compute net salary after tax pay, subtracting the tax.
OUTPUT: Display the total net pay
*/
function computeSalary () {
	
	//INPUT get the 
	let hours = parseFloat(document.getElementById( 'regularHours').value);
	
	let wage = parseFloat(document.getElementById('wagePerHours').value);
	
	//PROCESSING
	let grossSalary = hours * wage;
	let tax = grossSalary * 0.15;
	salary = grossSalary - tax;
	//OUTPUT
	document.getElementById('output').innerHTML = "Total net pay: $" + salary;
}
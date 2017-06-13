// create a calculator function that accepts 3 arguements 2 numbers and 1 operator
// ex. calculator ( 2, *, 2) >> this should return 4
// hints-- you will need to use conditionals ;-)

function calculator(num1, operator, num2)
 {
	if (operator === "+" ) {
		return num1 + num2;

	} else if (operator === "-" ){
		return num1 - num2;
	} else if ( operator === "*" ){
		return num1 * num2 ;

	} else {
		return "nope";
	}

}

var calcAnswer = calculator(22, "*", 22)
console.log(calcAnswer);
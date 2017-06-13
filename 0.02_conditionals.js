//conditionals

/*
	Boolean Oppperators
---------------------------------
		 < Greater Than
		< Less Than
		>= Greater to, or Equal
		<= Less than, or Equal to
		== Equal to
		=== Strictly Equal to
		! Not
		!= Not Equal to




*/


console.log(1>3); 
console.log(10==10);

var name = "elena";
console.log(name =="elena");

console.log(6 == "6"); //true
console.log(6 === "6"); //false

// if statements
/*if (boolean expression) {
	//some code goes here
}
*/
if ( 12 % 2 === 0){
	console.log("this number is even");
}
var userName = "admin";
var password = "admin3";

if (userName == "admin" && password == "admin"){
	console.log("thou shall pass ")
} else {

	
}

/*
	Chaining Boolean Expressions
--------------------------------
	&& and
	|| or

else if (boolean expression) {
	//some code in here	
} else {
	//catch all
}
*/

var age =35;


else {
	console.log("You are out of luck!");
}
else if ( age >= 35) {
	console.log( "You can vote and hold any place in government");
}
else if (age >=25) {
	console.log("You can vote and run for senate");

}
if {} (age >=18) {
	console.log("You can only vote");
}

//Functions
/*
	function Name_of_Function(){
	
	}


*/
//Declaring the function

//calling the function
/* var weather = "Its always sunny";
function currentWeather(){
}
	console.log(weather);
}

currentWeather();
*/

*/
//functions with parameters
// here, 'brand', is the set of parameters
function shoes(brand){b
	console.log("Man those " + brand + " are on fleek!");
}

shoes ("Crocs");
// functions with multiple parameters

function add(num1, num2){
	console.log(num1 + num2);
}

add (34 , 66);


//functions that return data
function sum(num1, num2){
	return num1 + num2;
}
var answerToQuestion = sum(23, 17);

// create functions for subtracting, mul, div, and mod
function mult(num1, num2){
	console.log(num1 * num2)
}
mult(4, 4)

function sub(num1, num2){
	console.log (num1 - num2);
}
sub(44, 33)

function div(num1, num2){
	console.log (num1 / num2);
}
div(44, 33)

function mod(num1, num2){
	console.log (num1 % num2);
}
sub(44, 33)

function move(stri1, stri2){ 
	return stri1 + stri2;
}
	var answerToQuestion = move("i like to run, ", "this is nice")
	console.log (answerToQuestion)

*/



function sum(num1, num2, num3, num4){
	console.log("your water bll this month comes to " + (num1 + num2 + num3 + num4))
}
sum(23, 17, 44, 44);

function mult(num1,num2,num3){

	console.log("100 sodas will cost you $" + (num1 * num2)*num3)
}

mult(0.07, 0.99, 100)

//RECURSIVE FUNCTIONS

//a problem is divided into a set of similar sub problems,
//each solved with a trivial solution.
//generally, a recursive function calls isself to solve its subproblems

var hanoi = function (disc, src, aux, dst) {
	 if (disc> 0) {
	 	hanoi(disc - 1, src, dst, aux);
	 	document.writeIn('Move disc' + disc + 'from' + src 'to' + dst);
	 	hanoi(disc - 1, aux, src, dst);

	 }
};

		hanoi(3, 'Src', 'Aux', 'Dst');

//the goal is to move the stack to the destination post by
//moving one disc at a time to another post,
//never placing a larger disc on a smaller disc.
//the hanoi puzzle has a trivial recursive solution




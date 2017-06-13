
/* var age =1;
if (age >= 22) {
	console.log("old bones is your new name");
} 
else if (age >=20) {
		console.log("yarr mate you are old enough to walk the plank")
}
else if ( age >= 10) {
	console.log("not quite there yet cowboy")
}
else if (age >= 2) {
	console.log("you are small and baby like")
}
else {
	console.log("no beuno muchacho")
}
*/
/* this is not finished - solve this challenge
---------------------------------------------
var wins = 6;

if (wins >= 10) {
	console.log("oh yeah baaaabbyyy");
}
else if (wins >= 20){
	console.log("come on baby");
}
else if (wins >= 30) {
	console.log("hang in there baby");
}
else {
	console.log("its okay here's a pepsi");
} 
--------------------------------------------
/*

/* FIZZ
	BUZZ
		CHALLENGE
		Disclaimer: This is a classic job interview question. 
It would be really good for you to memorize and understand 
how it’s working just for understanding of the logic behin
d it. There are a lot of different ways to do it. 
 ---1Write a program that prints from 1 to 100.
----2For multiples of three print "Fizz" instead of the number.
----3For multiples of five print "Buzz" instead of the number. 
----4For numbers which are multiples of both three and five print "FizzBuzz".
*/

var num = 1;

while (num < 101){
	
	if (num % 15 === 0 ) {
		console.log("Fizz");

	}else if (num % 3 === 0 && num % 5 ===0){
		console.log("FizzBuzz")
	}
	else if ( num % 5 === 0){
		console.log("Buzz");

	}
	else {
		console.log(num);
	}

	num = num + 1; //wonky expression

}







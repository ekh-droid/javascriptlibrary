//Loops

//////////////////////////////////////DO WHILE LOOPS
/*
lcv = 0 

do {
	lcv = lcv + 1
	// some code goes here for the loop//
} while ( true || false )



*/

var lcv1 = 0;

do {
	lcv1 = lcv1 + 1
	console.log(lcv);
} 		while ( lcv1 < 6 );


var lcv = 2;
// create a do while loop thay counts to 20 by 2's

do {
	lcv = lcv + 2
	console.log(lcv);
} 		while ( lcv < 20);

//create a do while loop that counts from 10 to zero

var lcv2 = 10;

do {
	lcv2 = lcv2 - 1;
	console.log("counting down from 10: "+lcv2 );
} 		while ( lcv2 > 0 );

////////////////////////////////////////WHILE LOOPS
/*
lcv = 0
while(true || flase){
	body of code, increment || decrement
}
*/

var counting = 0; 

while(counting < 50){
		counting += 5;
		console.log(counting);
}
// challenge create a countdown from 10 to 0..
//instead of 0, print blast off! 

var cdown= 10;

while( cdown > 0){
	cdown--;

	if(cdown == 0 ) {
	console.log("blast off");
	}
	else{
	console.log(cdown);
	}
}
////////////////////////////FOR LOOP

/*
for (lcv = 0; true or false espression ; increment || decrement){
	~code goes here~
}

*/

for (apples = 0 ; apples < 10; apples++){
	console.log(apples);
}

//creating a for loop that pushes numvers into a empty array

var numArry = [];

for ( var num =  1; num < 11 ; num++){
		console.log(num);
		numArry.push(num);
}
console.log(numArry)

//Mixed arrays
var ranThings = ["Bryce", 45, "Summer", true, []]
	console.log(ranThings);

///bronze challenge module #8
var hobbies = ["do it","make it","work it","stronger", "better",];
	console.log(hobbies);
/*
var cars = ["mariokart","toadkart","peachkart","bowserkart"];
	for ( var cars = ; cars < 10; cars++){
		console.log(cars);


}
console.log(cars)
*/
//gold challenge module #8 ////

var cats = ["taco", "six", "mowgz"]
var dogs = ["si", "cisco"]
var ppl =  ["alex","jake"]
var lists = [cats, dogs, ppl]

for ( list in lists ){
		var temp = lists[list] 
		for ( t in temp = cats + dogs + ppl )
		console.log(temp[t])
	}









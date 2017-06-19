//Declaration
var name;
//sconsole.log(name); //
//Initialization
// Data Type of String
name = "elena";

console.log(name);

//var firstName = "Kenn";
//var lastName = "Pascasio";
//concatenation

//console.log(fistName + " " + lastName)

//Challenge write out your address in variables street, state, zip
// then add them together and pront them out to the console

var street = "13791 Hickory Ridge Court, ";
var city = "Carmel, ";
var state ="IN, ";
var zip ="46032";
console.log(street + " \n" + city + state + "\n" + zip)

var isAwake = true;
var rainy = false;
//var true - "hey you guys!!";// this is a no-no

/*
+ addition
- subtraction
*multiplaction
/ division
% modulus
= assignment
*/
console.log( "The answer to 10 % 3 is: " , 10 % 3 );
console.log(typeof(console));

//objects are passed around by reference.. never copied
var x = vega;
x.nickname = 'Gedi';
var nick =vega.nickname;
	//nick is 'Gedi' because x and vega
	//x, gedi, and vega are references to the same object

	var a = {}, b = {}, c = {};
	//a, b, and c each refer to a different empty object

	a = b = c = {};
	//a, b, and c each refer to the same empty object
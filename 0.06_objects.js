//Objects
/*
var empObject = {};

var johnQualls = {
// Key   :  Value
	name : "John Qualls",
	age : 39,
	hairColor : "Brown Hair"

};

/*this is a editotial comment!*/
/*



console.log(johnQualls);
console.log(johnQualls.age);
console.log(johnQualls.name + " is of the age: " + johnQualls.age);
johnQualls.height = "6ft";

console.log(johnQualls.height);
console.log(johnQualls);
// create an animal object with the propeties of type, weight, commonINindiana, and Habitat
var empObject= {};
var animal = {
	type : "rascals",
	weight : "290 lbs",
	habitat : " in most malls",
	commonINindiana : "yes"
};

console.log(animal.type + " weigh " + animal.weight + " and are found" + animal.habitat);

console.log(animal["habitat"]);
animal["nickName"] = "Sassy Rascal John";
console.log(animal["nickName"] + " lives in " + animal.habitat);
// reassigning values
animal.type = "sassy rascals";
console.log(animal.type)
// change the weight of the anima;; property using square bracket notation
//then add a new array property of moviesAboutMe (sassy rascal rescue)

animal["habitat"] = "moved from malls to theme parks"
animal.moviesAboutMe = ["Sassy Rascal rescue", "Blue Crush", "The Lizzie McGuire Movie"];

console.log(Object.keys(animal));
// Objects with Methods


var theBryceisRight = {
	name 		: "Bryce Greene",
	age			: 55,
	vocation 	: "TA",
	email 		: "theBryceisRight@gmail.com ",
	greeting	: function (){
					return "Greetings earthlings I am " + this.name + " I am here to learn you.";
	},


//create a method for contactMe and include the email property in a return statement
contactMe  : function (){
				return "connect with me at " + this.email;
						},
//create a method thAT Calls both of the methods above
doBoth 		: function (){
				console.log(this.greeting());
				console.log(this.contactMe());
} 
}
theBryceisRight.doBoth()

////////////////////////////object constructors
var paul = new Object;
		paul.name = "Paul CO' Connor";
		paul.vocation = "Curriculum Master";
		paul.hobbies = ["rocking out code", "listening to good music ", "baking banana muffins"];

////////////////////////////object constructor template
*/

function Hotel(name, rooms, booked){
	this.name = name; 
	this.rooms = rooms; 
	this.booked = booked; 
	this.checkAvaliablity = function(){
		return "There are " + (this.rooms - this.booked) + " rooms left."
	};
}
 {}
 // the new keyword helps us intanitate a new object
var jw = new Hotel("JW Marriot", 300, 250);
var jwExp = new Hotel("Mini J'Dubs", 100, 50);

//creating an array of hotels
var hotels = [jw, jwExp];
//grabbing the name from one of the hotels 
console.log(hotels[1].name);

for (var h in hotels){
	console.log(hotels[h].name);
}
console.log(jwExp.checkAvaliablity());


////OBJECT_CHALLENGES/////////////////////////
/*
Create 4 person objects with attributes: name, age, favoriteShows[] (Array with at least 5 elements)
THE FOLLOWING FOUR LINES ARE TO BE FUNCTIONS IN EACH PERSON OBJECT
*/

function Person(name, age, favoriteShows){
	this.name = name; 
	this.age = age; 
	this.favoriteShows = favoriteShows; 
	this.birthday = function(){
		return "You are " + (this.age + 1 ) + " today! Yay."
	}
}
var rose= new Person("rose", 21, "pirtes of the carribean")

var tim= new Person("tim", 66, "spongebob")

var elena= new Person("elena", 23, "blood feast")

var alex= new Person("Alex", 26, "blood feast")
	
	
	// console.log(Person[1].birthday);
	console.log(alex.favoriteShows)



/*
Create a function called birthday that takes in a person and adds one to their age.
Create a function that takes in person looks at their favorite shows, then prints out the shows they have in common.
	If there are no shows in common print "No shows in common"
Create a function that prints out "Hello, my name is *** and I am *** years old, and one of my favorite shows is " and then gives a random show from their list of shows

Create an array full of all the created persons. 
Create an array of 10 shows
Create a function that creates a person object.
	This function takes in name and age
	Populates the favoriteShows array with 5 random shows pulled from the shows array
	Includes the functions for person defined above.
	
Write a function that generates 5 people with random names (5 letters) and random ages(between 1 and 50)
	then adds them all to the existing array full of people


Create a function that takes in an array and removes anyone with a name beginning with a vowel

Create a function that takes in an array and returns the oldest person

Create a function that takes in an array and returns an array of people in order from youngest to oldest

Create a function that takes in an array and returns an array of people in order from oldest to youngest

Create a function that takes in an array and returns an array with three arrays
	The first array is people under 20 
	The second is with people 20 and over, but not 35 
	The third is with anyone who is 35

Create a function that takes in an array of people and returns an array the people in alphabetical order. 
Add Comment Collaps
*/

var  Vega = {
	name 			: "Vega",
	age				: 354000,
	location 		: "Babylon",
	occupation 		: "dragon slayer ",
	myname			: function (){
					return "Greetings earthlings I am " + Vega.name + ", I am here to slay.";
	},
	myage			: function (){
					return "I am " + Vega.age + " in light years.";
	},

	doAll 			: function (){
				console.log(Vega.myname());
				console.log(Vega.myage());
},
}
Vega.doAll();


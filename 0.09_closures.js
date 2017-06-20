/*
Closures essentially functions
	variables inside of functions cannot be used outside

*/
var init = function(){

		var name = "summer";
			//encapsulating this data inside a function

		function displayName(){
				console.log(name);
		}
//
		displayName();
}
init();

var friend = {}

var setAge = function(myAge){
	//here is our closure, functions close data within functions
	//its a way to protect data inside of a scope
		var birthday = '5/16/2017'
		return {
			getAge: function(){
				console.log(myAge);
				return myAge;
		}
	}
}

friend.age = setAge(55);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.birthday);


var smartCar = {}

var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(15);
console.log(smartCar.mpg);
console.log(smartCar.MPG(calculateMpg)
	);
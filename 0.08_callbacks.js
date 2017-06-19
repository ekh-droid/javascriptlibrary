//callbacks are used in a GET, POST, DELETE ajax method

var fs = require('fs');

/* request = prepare+the+request();
send_request_asynchronously (request, function(response){
	display(response);
});

*/

//abstract function

//when i first do this, i want to make sure i select a filepath as the first parameter
//2nd parameter being what words to select
function getBulls(filepath, done){
	//make sure i can compare things against, hey file system, read this file that the
	//user of the function passes into it as an srguement.
	//filepath is the arguement here
	fs.readFile(filepath, function(err, bulls){
		//function(err,bulls)) is the callback here, to handle said arguement
		//were trying to catch the error... so to catch we use an if!

		if (err) return done(err);
				//if error is there, hey, return an error message

			fs.readFile('0.08_bulls.dictionary', function(err, dict){
					//if there ever is an error, we want to make sure the most unique cases are alwayss first
				if (err) return done(err);

					//do some logic here, is wherewe can call our function of comaparables!
			//pass in 2 things here; bulls & dictionary
			compareBulls(bulls, dict)

	})
	})

//vrriabl way of another function
var compareBulls = function (bulls, dict){
		//turn these items from these files into arrays, then split them up!
		dict = dict.toString().split('\n');
		//pass in dictionary, then split it into a new line using ".split('\n")
		bulls.toString().split('\n').filter(function(bulls){
			//this line is going over the dictionary we have passed
			// then its checking if the bulls are located inside of the dictionary
			//so if it is, then its returning the value
				return dict.indexOf(bulls) !== -1
				// != -1 puts a measure on the function, so it does not goes past what is called for
				//again protecting for unique cicrumstances


		})
		done(bulls);
}
}


getBulls('0.08_bulls.txt', function(bulls){

	console.log(bulls);
})
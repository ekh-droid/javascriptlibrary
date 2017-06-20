/*
		iffe = immediately-invoked-function-expression

		once i declare a funtion, im going to run it in the same block of code

		to create an iffe, start off with () */
		(function printNum(){
			var a = 5;
			console.log(a);
		})();
	//this creates, declares, and calls, at the same time.
	//after you read this code, run this code. saves time huh.

	//this is an iffee that counts 1 - 10
	(function printNum(){
			var b = [1,2,3,4,5,6,7,8,9,10];
			console.log(b);
	})();

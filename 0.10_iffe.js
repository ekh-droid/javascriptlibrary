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


		(function tag() {
					var h = ["<h1>"+"HEY"+"</h1>"];
					console.log(h);

		})();



/* in a real web develop situaton, this is used to create a limited scope which variables can be contained
and released. 
*/

(function consoleNum(){
   var arraigh = [];
   
   arraigh.push(6, i + 1, 3);
   
   console.log(arraigh[1]);
   
})();

console.log(i);

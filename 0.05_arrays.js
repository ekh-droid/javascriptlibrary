//arrays

//[]
//                0           1       2        3         4
var students = ["Harrison", "Rose", "ben", "caitlyn", "Kay"];

students[1] = "Steve";
students[5] = "Nick";
console.log(students);

students.push("aaron");
console.log(students);

students.pop([2]);
console.log(students);

//For each loop 
for (var s in students){
		console.log(students[s] + " is in the position of: "+ s)
	}
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

// create a array of number 1 - 10 then use a for in a loop to
// print it in the console

var numbers = ["1,2,3,4,5,7,8,9,10"];

	for (var n in numbers)
	{
			console.log(numbers[n]);
	}
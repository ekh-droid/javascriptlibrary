//IMMEDIATELY-INVOKED FUNCTION EXPRESSION SYNTAX ///

//Why would we use an IIFE instead of just creating a function and invoking it right afterwards?

//Privacy. This creates a scope. 
//In Javascript, variables are scoped to their containing function. 
//This means they can not be called outside of a function.
//Example:
let i = 4;   
console.log(i);
(function consoleNum(){
var arraigh = [];
 
 arraigh.push(i, i + 1, i + 2 );
  console.log(arraigh[1]);
  
})();

console.log(i);

// You should get back the integer of 4, 5, & 6, 
// when you console.log this. With this iife expression,
// consoleNum is the global name place we are using.
// arraigh holds place for what action we are trying to invoke. “i”, is the changing variable.

//     Try putting  let i = 4; inside of the parameters of (function consoleNum(){})();
//     What happens? Can you explain why this change occurs?

//GREAT, now try this!
   function(){
   var superSecret = 195;})()
   console.log(superSecret);
   //*** After console log, notice you get this "Uncaught ReferenceError: superSecret is not defined"***
//Fix this expression; what can you do to this to make "superSecret" viewable outside of the function.
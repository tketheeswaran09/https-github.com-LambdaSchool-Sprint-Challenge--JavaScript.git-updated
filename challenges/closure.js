// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/*There is a box. Inside that box there are 2 smaller boxes. The myfunction box belongs to the main box which is the 
'const extrernal' box only, but the 'nested function' box belongs to both 'myfunction box' and the 'const external'. 
The problem is the nested function box does not know what internal means. 
So it decides to look outside the box and figures out it belongs to the external box.*/


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the s
ummation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(parameter) {
  let sum = 0;
  for (let i = 1; i <= parameter; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumation(4));


// Write a program to print the given patterns using the loops-
// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//    *
//    **
//    ***


let n =parseInt(prompt("Enter number for table \n"))
let string =""
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
      string+= "*";
  }
  console.log(string);
  console.log("\n");
  string=""
}
// Print a square pattern, if the input is 3 then the output should be similar to the given output
// ***
// ***
// ***


let n =parseInt(prompt("Enter number for table \n"))
let string =""
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n; j++) {
      string+= "*";
  }
  console.log(string);
  console.log("\n");
  string=""
}
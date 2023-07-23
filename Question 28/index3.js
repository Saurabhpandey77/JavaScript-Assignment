// Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

let rows = parseInt(prompt("Enter the row"))
let string = "";

// External loop
for (let i = 1; i <= rows; i++) {
  
  // printing spaces
  for (let j = 1; j <= rows - i; j++) {
    string += " ";
  }
  
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
//Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let text = ["Facebook", "pw skills","Google", "Microsoft", "Apple", "IBM","pw skills", "Oracle", "Amazon"];
let first = text.indexOf("pw skills");
let last = text.lastIndexOf("pw skills");
console.log(`first index is ${first}and last index is ${last}`)
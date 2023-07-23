// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let filename =prompt("Enter file name")
let name =filename.split('.')
let extension=name.pop()
console.log(`File extension is .${extension}`)
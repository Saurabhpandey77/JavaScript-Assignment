//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let text = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const myArray = text.split(",");
for(i=0;i<myArray.length;i++){
    console.log(myArray[i])
}
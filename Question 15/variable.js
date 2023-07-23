// Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let num = parseInt(prompt("Enter number marks "))
if(num<=100 & num >=80){
    console.log(`You got A grade`)
}else if(num<=79 & num >=70){
    console.log(`You got B grade`)
}else if(num<=69 & num >=60){
    console.log(`You got C grade`)
}else if(num<=59 & num >=50){
    console.log(`You got D grade`)
}
else if(num<=49 & num >=0){
    console.log(`You got F grade`)
}else{
    console.log(`Enter valid marks`)
}
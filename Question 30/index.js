//Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let num1 =parseInt(prompt("Enter the number\n"));
let num2 =parseInt(prompt("Enter the number\n"));
let operator=parseInt(prompt("1 for Addition\n 2 for Substraction\n 3 for multiplication \n 4 for Division\n"));
if(operator==1){
    console.log(`Addition is ${num1+num2}`)
}else if(operator==2){
    console.log(`Substraction is ${num1-num2}`)
}else if(operator==3){
    console.log(`Multiplication is ${num1*num2}`)
}else if(operator==4){
    console.log(`Division is ${num1/num2}`)
}else{
    console.log("Enter vaild number")
}
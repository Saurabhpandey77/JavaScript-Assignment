//  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let text = prompt("Enter month to check season \n")
let month =text.toUpperCase();
if(month =="SEPTEMBER" || month == "OCTOBER" || month== "NOVEMBER"){
    console.log(`It a Autumn season`)
}else if(month == "DECEMBER" || month == "JANUARY" || month == "FEBRUARY"){
    console.log(`It a Winter season`)
}else if(month == "JUNE" || month == "JULY" || month == "AUGUST"){
    console.log(`It a Summer season`)
}else if(month == "APRIL" || month == "MAY" || month == "MARCH"){
    console.log(`It a Spring season`)
}
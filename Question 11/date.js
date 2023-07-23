// Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


const a = new Date();

let year = a.getFullYear();
console.log(year)

let month = a.getMonth();
console.log(month)

let date = a.getDate();
console.log(date)

let day = a.getDay()
console.log(day)

let hour = a.getHours();
console.log(hour)

let minutes = a.getMinutes();
console.log(minutes)


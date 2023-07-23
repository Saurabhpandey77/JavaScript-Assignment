// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const a = new Date();
let year = a.getFullYear();
let month = a.getMonth();
let date = a.getDate();
let hour = a.getHours();
let minutes = a.getMinutes();
console.log(`${year}-${month}-${date} ${hour}:${minutes}`)
console.log(`${date}-${month}-${year} ${hour}:${minutes}`)
console.log(`${date}/${month}/${year} ${hour}:${minutes}`)

//  The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sorted_ages=ages.sort();
console.log(sorted_ages)
let minValue = Math.min(ages);
let maxValue = Math.max(ages);
console.log("Minimum age is:" + minValue);
console.log("Maximum age is:" + maxValue);

const median =(sorted_ages[sorted_ages.length/2]+sorted_ages[(sorted_ages.length+1)/2])/2
console.log(median)

let sum=0
for(i=0;i<sorted_ages.length;i++){
    sum +=i;
}
let average=sum/sorted_ages.length
console.log("Average age is"+average)

let range=maxValue-minValue
console.log("Range of age is"+range)

let camp1=Math.abs(minValue-average)
console.log(camp1)
let camp2=Math.abs(maxValue-average)
console.log(camp2)

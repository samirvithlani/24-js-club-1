//js date class
//class object

var date = new Date()

// date.setFullYear(2025)
// date.setMonth(1)
// date.setDate(14)
// date.setMinutes(0)
// date.setHours(0)
// date.setSeconds(0)

console.log(date)
//1970 1st jan 00:00 1

console.log("date...",date.getDate())
console.log("month..",date.getMonth())
console.log("year..",date.getFullYear())
console.log(date.getTime())



var today = new Date()
console.log(today)
console.log(today.toString())
console.log(today.toLocaleString())
console.log("ld...",today.toLocaleDateString())
console.log("ld...",today.toLocaleTimeString())
console.log(today.toISOString()) //utc
console.log(today.toTimeString())

//utc time + 5:30 hrs --> 13:35 + 5.30 : 19:05



var startDate = new Date("2025-01-01")
console.log(startDate)
var endDate = new Date("2025-01-27")
console.log(endDate)

const difftime = endDate-startDate;
console.log(difftime)
const diffDayes = difftime / (1000*60*60*24)
console.log(diffDayes) //26
//?:

var age =18
age>=18 ? console.log("eligible for vote..") : console.log("not eligible for vote..");

// if(age>=18){
//     console.log("You are eligible to vote")
// }
// else{
//     console.log("You are not eligible to vote")
// }


var no1 = 10
var no2 = 20
var max = no1>no2 ? no1 : no2
console.log(max);

// if(no1>no2){
//     max = no1;
// }
// else{
//     max = no2;
// }
// console.log(max);

// if(no1>no2){
//     console.log("No1 is greater")
// }
// else if(no1 == no2){
//     console.log("Both are equal")
// }
// else{
//     console.log("No2 is greater")
// }

no1>no2 ? console.log("No1 is greater") :
no1 == no2 ? console.log("Both are equal") :
console.log("No2 is greater");

var pers = 78;
//var grade;
// if(pers>=80){
//     grade = "A";
// }
// else if (pers>=70){
//     grade = "B";
// }
// else if(pers>=60){
//     grade = "C";
// }
// else{
//     grade = "D";
// }

// console.log(grade);

var grade = pers>=80 ? "A" :
pers>=70 ? "B" :
pers>=60 ? "C" :
"D";

console.log(grade);

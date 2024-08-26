var user = "amitraj shah";
console.log(user);
// console.log(user[0]) // access the first character of the string  ->a
// console.log(user[1]) // access the second character of the string ->m
// console.log(user[2]) // access the third character of the string   i
// console.log(user[3]) // access the fourth character of the string  t
//console.log(user[4]) // access the fifth character of the string

var len = user.length; //property of string
console.log("len of string = ",len)

for(let i=0;i<user.length;i++){
    //console.log(user[0]);
    console.log(user[i]);
}
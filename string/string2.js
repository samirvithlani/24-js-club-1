var mystring = "royal"
// var copystring = "";

// console.log(mystring[0])

// for(let i=0;i<mystring.length;i++){

//   //"" = ""+"r"
//   //"r" = "r" + "o"
//   //"ro" = "ro" + "y"
//   //"roy" = "roy" + "a"
//     //"roya" = "roya" + "l"
//     //"royal" = "royal" + ""
//     copystring = copystring + mystring[i] //0,1,2,3,4
// }

// console.log("copystring = ",copystring)


var revstring ="";

//mystring = 5
//0 = r
//1 = o
//2 = y
//3 = a
//4 = l
//5 = undefined
for(let i=mystring.length-1;i>=0;i--){
    //console.log(mystring[i])
    //"" =   "" + "l"
    //"l" = "l" + "a"
    //"la" = "la" + "y"
    //"lay" = "lay" + "o"
    //"layo" = "layo" + "r"
    //layor
    revstring = revstring + mystring[i]
}
console.log("revstring = ",revstring)
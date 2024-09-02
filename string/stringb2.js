var str1 = "rain"
var copystr =""

for(let i=0;i<str1.length;i++){
    //console.log(str1[i])
    //"" = "" + "r" = "r"
    //"r" = "r" + "a" = "ra"
    //"ra" = "ra" + "i" = "rai"
    //"rai" = "rai" + "n" = "rain"
    copystr = copystr + str1[i]
    
}


console.log("copystr = ",copystr)
var rev=""
//str1.length =4
//[0][1][2][3]
for(let i =str1.length-1;i>=0;i--){

    rev = rev + str1[i]

}
console.log("rev = ",rev)

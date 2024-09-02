var x = "royal Technosoft pvt ltd"
console.log(x)
// console.log(x[0])
// console.log(x[1])
// console.log(x[2])
// console.log(x[3])
// console.log(x[4])
// console.log(x[5])

var len = x.length;
console.log(len)
var count=0;
for(let i=0;i<x.length;i++){
    if(x[i] == " "){
        count++
    }
    //console.log(x[i])
}
console.log("space count = ",count)
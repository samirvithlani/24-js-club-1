//diff bw var laet const
//var = global scope
//let = block scope
//const = block scope
//void main() {} if else {} , {block}

var a = 10;
console.log("value of a = ",a)
{
    console.log("value of a inside block..= ",a)
    var x = 100;
    console.log("value of x inside block..= ",x)
}

console.log("value of x outside block..= ",x)

var p1 = 200;
console.log("value of p1 = ",p1)
var p1 = 300;
console.log("value of p1 = ",p1)
const test = ()=>{
    console.log("test called....")
}

const greet = (name)=>{
    console.log("Hello "+name)
}

const avg = (a,b,c)=>{

    return (a + b +c) /3
}

const avg1 = (a,b,c)=>(a+b+c)/3

test()
greet("Ms")

console.log(avg(10,20,30))
console.log(avg1(10,20,30))


//ternery op...
//?:

var no1 = 100
var no2 = 200
var no3 = 200
var max=0;

no1>no2 ? console.log("no1 is bigger") : console.log("no2 is bigger")

max = no1>no2?no1:no2
console.log(max)


max = no1 > no2 && no1 > no3 ?
 no1:no2 > no3 ? no2: no3
console.log(max)





///creare 1 function which will accept 1 patam as string
//and you have ti check string is palindrome or not use ternernry op and arrow function only...


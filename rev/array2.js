var users = ["amit","raj","dd","kunal","parth","raj","jay"]

console.log(users)
users.sort()

//users.sort((a,b)=>a.length-b.length)
console.log(users)


var sales = [1000,98,67,34,56,789,1234,567,9067,10]

// console.log(sales)
// //sales.sort()
// sales.sort((a,b)=>a-b)
console.log(sales)



// var flag = sales.some((s)=>{
//     return s>=10000
// })
var flag = sales.every((s)=>{
    return s>=0
})
console.log(flag)
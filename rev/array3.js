var users = ["amit","raj","dd","kunal","parth","raj","jay"]

// var upperArray =users.map((user)=>{
//     return user.toUpperCase()
// })

// for(let i=0;i<users.length;i++){

//     upperArray.push(users[i].toUpperCase())
// }
//console.log(upperArray)


var filtArray =users.filter((user)=>{
    return user.length ==3
})

// for(let i=0;i<users.length;i++){


//     if(users[i].length ==3){
//         filtArray.push(users[i])
//     }
// }
console.log(filtArray)


var sales = [1000,98,67,34,56,789,1234,567,9067,10]

// var toal = 0;

// for(let i=0;i<sales.length;i++){

//     toal = toal + sales[i]
// }
// console.log(toal)

var total = sales.reduce((prv,next)=>prv+next,0)
console.log(total)
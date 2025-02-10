var users = ["amit","raj","kunal","parth","raj","jay"]

console.log(users)
//console.log(users[0])

// for(let i=0;i<users.length;i++){
//     console.log(users[i])
// }


// users.forEach((user)=>{
//     console.log(user)
// })

users.push("parva")
console.log(users)

users.unshift("ved")
console.log(users)

var removedElm = users.pop()
var removedElm = users.shift()
console.log('remvoving...',removedElm)
console.log(users)



//var index = users.indexOf("raj")
var index = users.lastIndexOf("raj")
console.log("index",index)


//1st param index
//2nd param delete count...
//users.splice(1,1)
//users.splice(1,0,"janak")
users.splice(2,3,"janak","janki")

console.log(users)
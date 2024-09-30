var users = ["amit","sumit","kunal","parth","ajay","vijay","sujay"];

// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

//u == users[i]
// users.forEach((user,i)=>{
//     console.log(i+" "+user);
// }) :void...

//map will return new array
//map will return new array with same length
var upperUser =users.map((user)=>{
    return user.toUpperCase();
})

console.log(upperUser);


var price = [100,200,300,400,500,600,700,800,900,1000];

var priceDouble = price.map((p)=>{

    return p *2;
})
console.log(priceDouble);









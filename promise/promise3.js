const bookTicket = ()=>{

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise has been resolved...")
        },2000)
    })

    return promise;
    
}


//x == promise
var x = bookTicket()
console.log(x) //
x.then((data)=>{
    console.log(data)
})
x.catch((err)=>{
    console.log(err)
})
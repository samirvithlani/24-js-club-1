// console.log("1")

// setTimeout(()=>{
//     console.log("2")    
// },3000)

// console.log("3")

//Promise..
//javascript Promise class : new 

//stages

//promise -->object it can be any.... prom ,z....
//new keyword
//Promise class
//()=>{} //callback function
//ressolve,reject
var promise = new Promise((resolve,reject)=>{
    //function
    setTimeout(() => {
        resolve("promise has been resolved...")    
    }, 2000);
    
})
console.log(promise)
promise.then((data)=>{
    console.log(data)
})
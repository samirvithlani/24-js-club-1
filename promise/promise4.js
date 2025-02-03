var payNow = ()=>{


    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({tId:"119piklnddd",amount:1000,status:"Success"})
        }, 4000);
    })

    return promise
}


var payment = payNow()
console.log(payment)
payment.then((data)=>{
    console.log(data)
})
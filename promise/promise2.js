const zomato = ()=>{


    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({orderId:101,dish:"pizza",qty:1,amount:400,status:"accepted"})
            //reject({orderId:101,messgae:"insuffcient amount payment failed."})
        },3000)
    })

    console.log(promise)
    promise.then((order)=>{
        console.log(order)
    })
    promise.catch((err)=>{
        console.log(err)
    })


}
zomato()
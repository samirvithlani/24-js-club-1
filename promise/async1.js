const bookTicket = ()=>{

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise has been resolved...")
        },2000)
    })

    return promise;
    
}


const printTicket = async()=>{

    console.log("priting ticket..")
    var x = await bookTicket()
    console.log(x)
    //then catch
}
printTicket()
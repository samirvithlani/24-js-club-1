var card = "visa"
var upi = true
var balance = 1000
var payment =900

if(card == "rupay" || upi ==false ){
    console.log("payment process...")
    if(balance>=payment){
        console.log("payment success..")
    }
    
    else{
        console.log("not enough balance..")
    }
}
else{
    console.log("payment failed..")
}

for(let i=0;i<=10;i++){
    console.log(i)
}
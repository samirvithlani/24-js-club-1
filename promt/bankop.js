var chance =3


while(chance>0){

    var amount = parseInt(prompt("Enter the amount to open a bank account"));
    console.log("amount...",amount);
    //12000
    if(isNaN(amount)){
        console.warn("Please enter a valid amount");
        chance--;
        continue;
    }
    if(amount<10000){
        chance--;
        console.error("Insufficient amount to open an account. You have only "+chance+" chances left");
    }
    else{
        console.log("Account opened successfully");
        break;
    }


}
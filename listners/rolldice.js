const btn = document.getElementById("btn")///<button>

btn.addEventListener("click",()=>{

    const dice = document.getElementById("dice") //<div>

    const randomNo = Math.floor(Math.random()*7)
    console.log(randomNo)
    if(randomNo==0){
        dice.innerHTML = "<span>*</span>"
    }
    else if(randomNo==1){
        dice.innerHTML="<span> * * </span>"
    }

})
const changeText = ()=>{

    const button = document.getElementById("btn")
    button.innerHTML = "click"

}




const getScore = ()=>{

//how to generate random number
    var randomNo = Math.floor(Math.random()*1000)
    //console.log(randomNo) // rno
    const score = document.getElementById("score") //<p>
    score.innerHTML = randomNo //<p>randomNo</p>

}
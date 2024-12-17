const mydiv = document.getElementById("mydiv")
const text = document.getElementById("text")
var words = ["anbc","pqr","lnlkajas","s;kasl","slahsui","joih"]
mydiv.addEventListener("mouseenter",()=>{

    
    var randomIndex =Math.floor(Math.random()*words.length)
    //console.log(randomIndex)
    console.log(words[randomIndex])
    text.innerHTML=words[randomIndex]


})
mydiv.addEventListener("mouseleave",()=>{

    text.innerHTML=""
})
const mydiv = document.getElementById("mydiv") //<div>
mydiv.addEventListener("mouseenter",function(){
    //console.log("mouse entered..")
    mydiv.style.borderRadius="50%"
})
mydiv.addEventListener("mouseleave",()=>{
    //console.log("mouse leaved..")
    mydiv.style.backgroundColor="red"
})
mydiv.addEventListener("click",()=>{
    //console.log("mouse clicked...")
    mydiv.style.height="400px"
    mydiv.style.width="400px"
})
mydiv.addEventListener("dblclick",()=>{

    mydiv.style.height="200px"
    mydiv.style.width="200px"
    mydiv.style.backgroundColor="black"
})

const btn = document.getElementById("btn") //<button>

btn.addEventListener("click",()=>{
    alert("button clicked...")
})
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor="green"
})
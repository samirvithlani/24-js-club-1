window.addEventListener("DOMContentLoaded",()=>{

    console.log("dom loaded...")
})

window.addEventListener("copy",()=>{
    alert("dont copy...")
})

window.addEventListener("resize",()=>{
    console.log("x ",window.screenX)
    console.log("y",window.screenY)
})

window.addEventListener("scroll",()=>{
    console.log("x bar",window.scrollX)
    console.log("y bar",window.scrollY)
})
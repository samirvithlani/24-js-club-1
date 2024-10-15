const test = ()=>{
    //console.log('test function called...')
    var txt = document.getElementById("txt") //<h1 id="txt">Hello</h1>
    console.log(txt)
    txt.innerHTML = "Hello World"
    txt.style.color = "red"
    txt.style.fontSize = "50px"
}

const changeLink = ()=>{

    const link = document.getElementById("link") //<a>
    link.href = "https://www.hotstar.com"
    link.innerHTML = "Hotstar"

}

const root = document.getElementById("root") //<div></div>

const h1Title = document.createElement("h1") //<h1></h1>
h1Title.innerHTML = "Hello i am dynamic H1" //<h1>......</h1>

root.appendChild(h1Title)//<div> <h1>....</h1></div

var users = ["ram","shyam","seeta","geeta","hari","amit","sumit","jadav"]

for(let i=0;i<users.length;i++){

    const userH2 = document.createElement("h2");//<h2></h2> <h2></h2>
    userH2.innerHTML = users[i] //<h2>ram</h2><h2>shyam</h2>
    root.appendChild(userH2)//

}


const addButton = document.createElement("button") //<button></>
addButton.innerHTML = "Click Me" //button>Click me</>

addButton.addEventListener("click",()=>{
    alert('button clicked...')
})


root.appendChild(addButton)
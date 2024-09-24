var users = ["kunal","ram","akash","ajay","parth"];
//
var flag = false;

for(let i=0;i<users.length;i++){

    if(users[i].startsWith("a")){
        flag = true
        break
    }

}

console.log("is a present in users ",flag)

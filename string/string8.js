var email = "sam@gmail.com"
// var flag = email.includes("@")
// console.log(flag)

//includes --> 'x' --> true

var flag = false;
for(let i=0;i<email.length;i++){
    //console.log(email[i])
    if(email[i] == "x"){
        flag = true;
        break;
    }
}

console.log(flag)
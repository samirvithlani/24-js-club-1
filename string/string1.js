var user = "ramayan"
console.log(user)
// console.log(user[0])
// console.log(user[1])
// console.log(user[2])

// console.log(user[3])

//to find len of string...





var len = user.length; //it is property of string
console.log("len of user = ",len)

for(let i=0;i<user.length;i++){
    console.log(user[i])
}



//string immutable...4

var fname = "ram"
var lname = "kumar"

var fullname = fname +" "+ lname
//fullname + "ravi" // immutable
fullname = fullname + "ravi" // immutable
//fullname = "ravi"
console.log(fullname)

//hello this is ahmedabad 

//no space find...



var data = "hi this is india"
var spacecount =0;

for(let i=0;i<data.length;i++){


    if(data[i] == " "){
        spacecount++;
    }

}
console.log("space count = ",spacecount)
console.log("no of words in data = "+(spacecount+1))










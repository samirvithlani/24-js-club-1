var marks = [22,22,23,24,22,21]

// var flag = false;
// for(let i=0;i<marks.length;i++){

//     //22>=24 == false
//     //23>=24 == false
//     //24>=24 == true
//     if(marks[i]>=24){
//         flag = true //flag = true
//         break
//     }

// }

var flag = marks.some(function(m){

    //12>=24 == false
    //22>=24 == false
    //23>=24 == false
    //24>=24 == true
    return m>=24
})

console.log("is 24 present in marks ",flag) //true

var flag = marks.some((m)=>{
    return m>=24
})

console.log("is 24 present in marks ",flag) //true

var flag2 = marks.every((m)=>{
    return m>=20
})
console.log("is all marks greater than 20 ",flag2) //true


var users = ["parth","jay","raj","kunal","ram"]

var falg3 = users.some((u)=>{
    return u.includes("y")
})

console.log("is y present in users ",falg3) //true

var flag4 = users.every((u)=>{

    return u.includes("a")
})
console.log("is all users have a ",flag4) //false

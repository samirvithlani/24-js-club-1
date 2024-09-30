var users = ["amit","sumit","kunal","parth","ajay","vijay","sujay"];


//u == users[i]
var filterUsers = users.filter((u)=>{

    //u =amit ==5 false
    //u =sumit ==5 true
    return u.length==5;
})

console.log(filterUsers);



var data = [101,23,45,67,56,55,432,18]
var evenArray = data.filter((d)=>{

    return d % 2 ==0
})
console.log(evenArray);
//diff bw filter and map
//map will return new array with same length
//filter will return new array with less length
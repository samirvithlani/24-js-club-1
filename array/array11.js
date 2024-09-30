var users = ["amit","sumit","kunal","parth","ajay","vijay","sujay"];
var filterUsers =[]

for(let i=0;i<users.length;i++){

    //amit
    //sumit
    if(users[i].length==5){
        filterUsers.push(users[i])
    }
}

console.log(filterUsers);


var sales =[100,121,345,678,908,1023]

var filterSales =[]

for(let i=0;i<sales.length;i++){

    if(sales[i]>500){
        filterSales.push(sales[i])
    }

}
console.log(filterSales);

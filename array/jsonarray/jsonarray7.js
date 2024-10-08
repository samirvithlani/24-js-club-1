const employees = [
    {
        id:1,
        name:"raj",
        salary:1200,
        age:25,
        city:"mumbai"
    },
    {
        id:2,
        name:"parth",
        salary:1500,
        age:26,
        city:"pune"
    },
    {
        id:3,
        name:"kunal",
        salary:2000,
        age:27,
        city:"mumbai"
        
    }

]

//1)any of employee lives in mumbai

var flag = employees.some((emp)=>{
    return emp.city =="mumbai"
})
console.log(flag);

var flag1 = employees.every((emp)=>emp.salary>=1000)
console.log(flag1);
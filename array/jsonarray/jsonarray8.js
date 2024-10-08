const employees = [
    {
        id:1,
        name:"raj",
        salary:1200,
        age:25,
        city:"mumbai",
        hobbies:["cricket","football"]
    },
    {
        id:2,
        name:"parth",
        salary:1500,
        age:26,
        city:"pune",
        hobbies:["cricket","football","reading"]
    },
    {
        id:3,
        name:"kunal",
        salary:2000,
        age:27,
        city:"mumbai",
        hobbies:["reading","travelling"]
        
    }

]


//1) find all employees who lives in mumbai

var mumbaiEmps = employees.filter((emp)=>{
    return emp.city =="mumbai"
})
console.log(mumbaiEmps);

//find all employees who salary is less than 1500

var empSal = employees.filter((emp)=>emp.salary<=1500)
console.log(empSal);

//find employees who is living in mumbai and salary is greater than 1500


var empwithcity = employees.filter((emp)=>emp.city=="mumbai" && emp.salary>1500)
console.log(empwithcity);

//find all employees with hobbies cricket


var empWithCricketHobbiy = employees.filter((emp)=>emp.hobbies.includes("cricket"))
console.log(empWithCricketHobbiy);
var companies = [
  {
    name: "google",
    employees: [
      {
        name: "sundar pichai",
        age: 45,
        salary: 100000,
        position: "CEO",
      },
      {
        name: "larry page",
        age: 47,
        salary: 100000,
        position: "founder",
      },
      {
        name: "sergey brin",
        age: 47,
        salary: 100000,
        position: "founder",
      }
    ],
  },
  {
    name:"facebook",
    employees:[
        {
            name:"mark zuckerberg",
            age:34,
            salary:100000,
            position:"CEO"
        },
        {
            name:"chris hughes",
            age:37,
            salary:100000,
            position:"founder"
        },
    ]
  },
];


//
var googleData = companies.find((comp)=>comp.name =="google");
console.log(googleData);

var googleEmps = companies.find((comp)=>comp.name =="google").employees;
console.log(googleEmps);

var foundersofGoogle = companies.find((comp)=>comp.name =="google").
employees.filter((emp)=>emp.position=="founder");

console.log(foundersofGoogle);


var fbEmployees = companies.find((comp)=>comp.name =="facebook").employees.
filter((emp)=>emp.age>35)
console.log(fbEmployees);
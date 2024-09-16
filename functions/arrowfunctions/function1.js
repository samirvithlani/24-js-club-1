// function add(){
//     console.log("Addition of 2 numbers");
// }
// add();

// const add = () =>{
//     console.log("Addition of 2 numbers");
// }
// add();


// function greetings (){

//     return "Good Morning";
// }

// const greetings = ()=>{
//     return "Good Morning";
// }


//in arrow function if you {} --> return is mandatory
//if you dont use {} --> return is optional
const greetings = () => "Good Morning";

var x = greetings();
console.log(x);



// function sum (a,b,c){

//     // var c = a + b + c;
//     // return c;
//     return a + b+ c;
// }

const sum = (a,b,c)=> a+b+c;


var ans = sum(10,20,30);
console.log(ans);
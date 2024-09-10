//function funName(pram){}

// function add(a,b){

//     //withput return statement
//     console.log(a+b);

// }


function add(){

    //without arg / param with return statement
    let a = 10;
    let b = 20;
    let sum = a + b;
    //cons...

    return sum;//30 
}

var x =  add();
console.log("ans = ",x);


function add1(a,b){
    //a =100
    //b = 200

    //c = 100 + 200 = 300
    let c = a + b
    return c //300

}


var ans = add1(100,200)
console.log("ans = ",ans);


function getFullName(fname,lname){


    let fullname = fname + " "+lname;
    
    return fullname;

}

var name = getFullName("ram","kumar");
console.log("Full Name = ",name);
var uName = getFullName("shyam","kumar");
console.log("Full Name = ",uName);



function greeting(name){

    return "Hello " + name;
}


var x = greeting("ms")
console.log(x);

var data = "abc"
//var index = data.indexOf("b")//1













function add(a,b){
    console.log("Addition = ",a+b);
}
function sub(a,b){
    console.log("Substraction = ",a-b);
}
function mul(a,b){
    console.log("Multiplication = ",a*b);
}
function div(a,b){
    console.log("Division = ",a/b);
}


var choice = parseInt(prompt("Enter your choice 1. Add 2. Sub 3. Mul 4. Div"));

switch(choice){

    case 1:
        add(10,20);
        break;
    case 2:
        sub(10,20);
        break;
    default:
        console.log("Invalid Choice");
        break;        

}
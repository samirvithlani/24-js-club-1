function add (a,b){

    //check a is number or not

    if(a === undefined || b === undefined || typeof a != 'number' || typeof b !='number'){
        console.log("Please provide two numbers");
    }
    else{
        let c = a + b;
        console.log(c);
    }
    
}
add(12,"abc");


// var a = "100"
// var b =100
// console.log(a==b)
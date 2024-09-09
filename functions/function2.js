//with argument / param without return type...

//let,var,const
function add(a, b) {
  console.log("value of a = ", a);
  console.log("value of b = ", b);

  let c = a + b;
  console.log("Addition is : ", c);
}

//add(12,22)

// var x = 100;
// var y = 200;
// add(x, y);

//add();
add(10,20,60)

function getPerc(math,sci,eng,phy,eco){
    
    let total = math + sci + eng + phy + eco;
    let pers = total / 5;
    console.log("Percentage is : ", pers);
}


getPerc(80,90,70,60,50)


function checkElig(age){

    if(age<=18){
        console.log("You are not eligible for voting");
    }
    else{
        console.log("You are eligible for voting");
    }
}


var age = parseInt(prompt("Enter your age : "));

checkElig(age)


























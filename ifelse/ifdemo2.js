var road1traffic = 200
var road2traffic = 200



if(road1traffic > road2traffic){
    console.log("Road 1 has more traffic")
}
else if(road1traffic == road2traffic){
    console.log("Both roads have same traffic")
}
else{
    console.log("Road 2 has more traffic")
}


// --------------------------------------------

//nested if else
/*
    if(){
        if(){
        }
        else{
        }
    
    }
        else{
        }

**/

var age = 17
var isPanCardIssued = true
var isDrivingLicenseIssued = false


if(age>=18){

        console.log("You are eligible to get pan card")
        if(isPanCardIssued == true){
            console.log("You already have a pan card")
        }
        else{
            console.log("You can apply for pan card")
        }


}
else{
    console.log("You are not eligible to get pan card")
    if(age>=16){
        console.log("You are eligible to get driving license")
    }
    else{
        console.log("You are not eligible to get driving license")
    }
}






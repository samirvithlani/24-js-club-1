const submitHandler = (event)=>{

    //action... prevent
    event.preventDefault()

    const nameError = document.getElementById("nameError")
    const emailError = document.getElementById("emailError")
    const ageError = document.getElementById("ageError")
    const genderError = document.getElementById("genderError")


    const nameValue = document.querySelector("#nameValue")


    const name = document.getElementById("name")
    //const name = document.querySelector("#name")
    console.log(name.value)

    const email = document.getElementById("email")
    console.log(email.value)
    const age = document.getElementById("age")
    console.log(age.value)


    const gender = document.getElementsByName("gender") //<array
    var genderFlag = false;
    for(let i=0;i<gender.length;i++){

        if(gender[i].checked){
            console.log(gender[i].value)
            genderFlag =true;
        }
    }



    if(name.value.length==0){
        nameError.innerHTML = "Name is required"
    }
    else{
        nameError.innerHTML = ""
        nameValue.innerHTML = name.value
    }
    if(email.value.length==0){
        emailError.innerHTML = "email is required"
    }
    else{
            emailError.innerHTML = ""
    }
    if(age.value.length==0){
        ageError.innerHTML = "age is required"
    }
    else{
        ageError.innerHTML = ""
    }
    if(genderFlag == false){
        genderError.innerHTML ="select any gender..."
    }

}
const submitHandler = (event)=>{
    event.preventDefault();
    console.log("form subbmited...")

    const name= document.getElementById("name") //<input/>
    //console.log(name.value)
    const age = document.getElementById("age")
    //console.log(age.value)
    const color = document.getElementById("color");
    // console.log(color.value)


    //radio...
    const gender = document.getElementsByName("gender");//[input,input]
    for(let i=0;i<gender.length;i++){

        //input male
        if(gender[i].checked){
            //console.log(gender[i].value)
            const genderOutput = document.getElementById("genderOutput")
            genderOutput.innerHTML = gender[i].value
        }

    }



    //get div -->output
    const output = document.getElementById("output")//<div>
    //output.style.color= "red"
    output.style.color= color.value


    const nameOutput = document.getElementById("nameOutput") //<p>
    nameOutput.innerHTML = "Name = " + name.value
    const ageOutput = document.getElementById("ageOutput")//<p>
    ageOutput.innerHTML = "age = "+ age.value

}
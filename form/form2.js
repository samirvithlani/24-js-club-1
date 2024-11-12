const handleSubmit =(event)=>{

    event.preventDefault();


    const name = document.getElementById("name")
    //console.log(name.value);



    const gender = document.getElementsByName("gender");
    console.log(gender);
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            console.log(gender[i].value);
        }
    }
    //checkboxes

    const sports = document.getElementsByName("sports");
    console.log(sports);
    for(let i=0;i<sports.length;i++){
        if(sports[i].checked){
            console.log(sports[i].value);
        }
    }


    const color = document.getElementById("color");
    console.log(color.value); ///#000000


    const output = document.getElementById("output"); //<div>
    output.style.color = color.value;  //<div style="color:"#00000"">

    const nameOutput = document.getElementById("name-output");
    nameOutput.innerText = name.value;

    const genderOutput = document.getElementById('gender-output');  
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderOutput.innerHTML = gender[i].value;
        }
    }





}
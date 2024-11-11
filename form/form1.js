const submitHandler = (event)=>{
    event.preventDefault(); //Prevent the default behaviour of the form
    console.log("Form Submitted");

    const uname = document.getElementById("name") //<input id="name">
    console.log(uname.value);
    // const name = document.getElementById("name").value
    // console.log(name);
    const uage = document.getElementById("age")
    console.log(uage.value);
    const uemail = document.getElementById("email")
    console.log(uemail.value);

}
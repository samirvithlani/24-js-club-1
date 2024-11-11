const submitHandler = (event) => {
  event.preventDefault(); //Prevent the default behaviour of the form
  console.log("Form Submitted");

  const uname = document.getElementById("name"); //<input id="name">
  //console.log(uname.value);
  // const name = document.getElementById("name").value
  // console.log(name);
  const uage = document.getElementById("age");
  //console.log(uage.value);
  const uemail = document.getElementById("email");
  //console.log(uemail.value);
  const country = document.getElementById("country");
  //console.log(country.value);

  document.getElementById("namevalue").innerHTML = uname.value;
  document.getElementById("agevalue").innerHTML = uage.value;
  document.getElementById("emailvalue").innerHTML = uemail.value;
  document.getElementById("countryvalue").innerHTML = country.value;
};

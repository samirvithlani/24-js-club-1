const submitHandler = (event) => {
  event.preventDefault();
  const name = document.getElementById("name"); //<input>
  const nameError = document.getElementById("nameError");
  const genderError = document.getElementById("genderError");
  //console.log(name.value)
  if (name.value.trim().length <= 0) {
    //console.log("name is required*")
    nameError.innerHTML = "Name is Required*";
    nameError.style.color = "red";
  } else {
    // console.log(name.value)
    const nameError = document.getElementById("nameError");
    nameError.innerHTML = name.value;
    nameError.style.color = "black";
  }

  var isChecked = false;
  var genderValue = "";
  const gender = document.getElementsByName("gender"); //[in,in]
  for (let i = 0; i < gender.length; i++) {
    //in[0] -->
    //in[1] -->
    if (gender[i].checked) {
      genderValue = gender[i].value;
      isChecked = true;
    }
  }

  if (isChecked == false) {
    genderError.innerHTML = "select gender *";
  } else {
    genderError.innerHTML = genderValue;
  }
};

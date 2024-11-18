const handleSubmit = (event) => {
  var selectedHobbies = []; //array object
  event.preventDefault();
  const name = document.getElementById("name").value;
  const hobbies = document.getElementsByName("hobbies");

  for (let i = 0; i < hobbies.length; i++) {
    if (hobbies[i].checked) {
      selectedHobbies.push(hobbies[i].value);
    }
  }

  //print the name and hobbies
  const nameValue = document.getElementById("nameValue");
  nameValue.innerHTML = name;

  const hobbiesValue = document.getElementById("hobbiesValue");
  hobbiesValue.innerHTML = selectedHobbies.join("-");
};

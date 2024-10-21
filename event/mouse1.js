const getAlert = () => {
  //alert("mouse event..")
  console.log("here..");
};

const changeColor = () => {
  const myButton = document.getElementById("btn"); //<button>
  console.log(myButton);
  myButton.innerHTML = "entered";
  myButton.style.color = "green";
};
const changeColor1 = () => {
  const myButton = document.getElementById("btn"); //<button>
  console.log(myButton);
  myButton.innerHTML = "leaving..";
  myButton.style.color = "red";
};

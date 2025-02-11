const generateBox = () => {
  const boxes = document.getElementById("boxes"); //<div>
  const txt = document.getElementById("txt"); //>in // 10
  boxes.innerHTML = "";
  var value = 100;
  var randomNo = Math.floor(Math.random() * txt.value);
  console.log(randomNo); // index.

  for (let i = 0; i < txt.value; i++) {
    const box = document.createElement("div");
    box.className = "box";
    const span = document.createElement("span");
    span.innerHTML = i + 1;
    box.appendChild(span);
    // box.style.height = "40px";
    // box.style.width = "40px";
    // box.style.backgroundColor = "blue";
    // box.style.margin = "2px";

    box.addEventListener("click", () => {
      //alert("clicked..."+(i+1))

      // if((i+1)%2==1){
      //     alert("dont click on odd box..")
      //     box.style.backgroundColor = "red";
      // }
      // else{
      //     box.style.backgroundColor = "green";
      // }

      if (i + 1 == randomNo) {
        //alert("ok...")
        box.className = "box2";
      }
    });

    boxes.appendChild(box);
  }
};

const root = document.querySelector("#root"); //<div>

const myImage = document.createElement("img");
myImage.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGNR463yGYQq0srv2lwl1iHzm7vbAtlPXFCQ&s";
myImage.style.height = "400px";
myImage.style.width = "400px";

myImage.addEventListener("mouseenter", () => {
  myImage.style.height = "200px";
  myImage.style.width = "200px";
});

root.appendChild(myImage);

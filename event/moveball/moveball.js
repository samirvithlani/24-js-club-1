var offsetX = 0;
var offsetY = 0;
const moveBall =(event)=>{


    const ball = document.getElementById('ball'); //<div id="ball"></div>
    offsetX = event.clientX - ball.getBoundingClientRect().left;
    offsetY = event.clientY - ball.getBoundingClientRect().top;

    console.log("x", offsetX, "y", offsetY);



}

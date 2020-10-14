let  circles = document.getElementsByClassName("rainbow-circle");
console.log(circles);
for(let i=0;i < circles.length;i++){
    let canvas = circles[i];

//    canvas.width = 50;
//    canvas.height = 50;

    let ctx = canvas.getContext("2d");
    let CX = canvas.width / 2;
    let CY = canvas.height/ 2;

    let gradient = ctx.createLinearGradient(230, 0, 0, 0);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.5 ,"blue");
    gradient.addColorStop(0.7, "red");
    gradient.addColorStop(1.0, "magenta");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(CX, CY, CY-5,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
}

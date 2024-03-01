var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 600;
canvas.style.position = "absolute";
canvas.style.top = "50%";
canvas.style.left = "50%";
canvas.style.transform = "translate(-50%, -50%)";

var c = canvas.getContext('2d');

c.fillStyle = "#071730";
c.fillRect(0,0, canvas.width, canvas.height);

//Stars
for (var i = 0; i < 300; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * 300;
    c.beginPath();
    c.arc(x, y, 3, 0, 2*Math.PI, false);
    c.stroke();
    c.fillStyle = "#7292c2";
    c.fill();
}

//Moon
c.beginPath();
c.arc(400,200, 150, 0, 2*Math.PI);
c.stroke();
c.fillStyle = "#73bfc9";
c.fill();

//Background mountain
c.beginPath();
c.moveTo(0,350)
c.lineTo(0,200);
c.lineTo(200,350);
c.lineTo(200,350);
c.lineTo(400, 200);
c.lineTo(600,350)
c.lineTo(800,200)
c.lineTo(800,350)
c.stroke();
c.fillStyle = "#263752";
c.fill();

//Foreground mountain
c.beginPath();
c.moveTo(0,350);
c.lineTo(200,150);
c.lineTo(400,350);
c.lineTo(600,150);
c.lineTo(800,350);
c.stroke();
c.fillStyle = "#263752";
c.fill();

//ground
c.fillStyle = "#10161e";
c.fillRect(0,350, canvas.width, canvas.height);

//house base
c.strokeStyle = "#000000";
c.lineWidth = 1.5;
c.strokeRect(200,380,150,150)
c.fillStyle = "#165570";
c.fillRect(200,380,150,150);

//house roof
c.beginPath()
c.moveTo(200,380);
c.lineTo(275,310);
c.lineTo(350,380);
c.stroke();
c.fillStyle = "#0c3041";
c.fill()

//door
c.strokeStyle = "#000000";
c.lineWidth = 1.5;
c.strokeRect(255,460,40,70);
c.fillStyle = "#0c3041";
c.fillRect(255,460,40,70);

//window1
c.strokeStyle = "#000000";
c.lineWidth = 1.5;
c.strokeRect(207,410,40,40);
c.fillStyle = "#919c56";
c.fillRect(207,410,40,40);

//window2
c.strokeStyle = "#000000";
c.lineWidth = 1.5;
c.strokeRect(301,410,40,40);
c.fillStyle = "#919c56";
c.fillRect(301,410,40,40);

//text
c.font = "30px Times New Roman";
c.fillStyle = "#73bfc9";
c.fillText("By Zheng Heng Kwong", 490,570);

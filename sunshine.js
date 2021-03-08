
document.write ('hi there');
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
var c = canvas.getContext ('2d');
c.fillStyle = 'pink';
c.fillRect (10, 10, 10, 10);


function Qcircle(x,y) {
    this.x = x;
    this .y = y;

    this.draw = function(){
        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI*2, false);
        //c.strokeStyle = 'blue';
        c.stroke();   
    }
}

var Qcircle= new Qcircle(200,200);



var radius = 13;
var dr = 2.2;
var x=200;
var dx=0.1;
var ddx= 2;
var y=300;
var dy = 0.3;
var ddy = 0.1;
c.strokeStyle = 'red';
function animate (){
    requestAnimationFrame (animate);
//c.clearRect(0, 0,  window.innerWidth - 100, window.innerHeight - 100);
//c.beginPath();
c.arc(x, y, radius, 0, Math.PI*2, false);
//c.fillRect(x=7, y-5, 100, 10);
c.stroke();
c.fill();
Qcircle.draw();
if (x +  radius > window.innerWidth - 100){dx = -dx; 
    c.strokeStyle = 'white'; c.fillStyle = 'blue'};
if (x -  radius < 0){dx = -dx; c.strokeStyle = 'blue';};
if (y +  radius > window.innerHeight - 100){dy = -dy; 
    c.strokeStyle = 'purple'; c.fillStyle = 'black';};
if (y -  radius < 0){dy = -dy; c.strokeStyle = 'yellow';};
if (radius>51){dr= -dr; c.strokeStyle = 'red';c.fillStyle = 'black';};
if (radius<2){dr= -dr; c.strokeStyle = 'orange';c.fillStyle = 'gray';};
x+=dx;
dx+=ddx;
if (dx> 6){ddx=-ddx; c.fillStyle = 'yellow';};
if (dx< -4){ddx=-ddx; c.fillStyle = 'purple';};
y+= dy;
dy+=ddy;
if (dy> 10){ddy=-ddy; c.fillStyle = 'purple';x=450; y=250;};
if (dy< -11){ddy=-ddy;c.fillStyle = 'brown'; x=y+100; y=300;};
radius += dr;
}

c.fillRect (100, 100, 100, 100);
c.stroke();

animate();
//Gets the users name.
//var name = prompt('What is your name?');
//Finds the element by id that is in the footer and prints the user's name.
//document.getElementById("name").innerHTML = name;

var ball = new Image();

function init() {
    ball.src = 'Images/Ball.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    var ctx = document.getElementById('myCanvas').getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 50, 50);

    ctx.save();
    ctx.translate(25, 25);

    var time = new Date();

    ctx.rotate(((2 * Math.PI) / 1) * time.getSeconds() + ((2 * Math.PI) / 1000) * time.getMilliseconds());
    ctx.translate(1, 1);
    ctx.drawImage(ball, 3, 3, 3, 3);

    ctx.save();
    ctx.rotate(((2 * Math.PI) / 2) * time.getSeconds() + ((2 * Math.PI) / 2000) * time.getMilliseconds());
    ctx.translate(2, 2);
    ctx.drawImage(ball, 1, 1, 7, 7);
    ctx.restore();

    ctx.save();
    ctx.rotate(((2 * Math.PI) / 3) * time.getSeconds() + ((2 * Math.PI) / 3000) * time.getMilliseconds());
    ctx.translate(3, 3);
    ctx.drawImage(ball, 2, 2, 10, 10);
    ctx.restore();

    ctx.save();
    ctx.rotate(((2 * Math.PI) / 4) * time.getSeconds() + ((2 * Math.PI) / 4000) * time.getMilliseconds());
    ctx.translate(4, 4);
    ctx.drawImage(ball, 4, 4, 13, 13);
    ctx.restore();
    ctx.restore();

    window.requestAnimationFrame(draw);
}

init();

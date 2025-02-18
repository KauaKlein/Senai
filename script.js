const canvas = document.getElementById("joguin");
const ctx = canvas.getContext('2d');

function desenhaPersonagem(){
    ctx.fillStyle = "yellow"
    ctx.fillRect(100, canvas.height -120,50,50)
}

function loop (){

    desenhaPersonagem()
    requestAnimationFrame(loop)
}

loop()
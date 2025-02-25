const canvas = document.getElementById("joguin");
const ctx = canvas.getContext('2d');

document.addEventListener('click', (e) =>{
    if(gameOver){
        location.reload()
    }else{
        console.log(e)
    }
})

let gameOver = false;
const personagem = {
    posicaoX:100,
    posicaoY:canvas.height-50,
    tamanhoX:50,
    tamanhoY:100,
}
function desenhaPersonagem(){
    ctx.fillStyle = "white"
    ctx.fillRect(
        personagem.posicaoX,
        personagem.posicaoY,
        personagem.tamanhoX,
        personagem.tamanhoY
    )
}
const obstaculo = {
        posicaoX: canvas.width -150,
        posicaoY:canvas.height -50,
        tamanhoX:50,
        tamanhoY:100,
        velocidade:2
}
function desenhaObstaculo(){
    ctx.fillStyle = "black"
    ctx.fillRect (
        obstaculo.posicaoX,
        obstaculo.posicaoY,
        obstaculo.tamanhoX,
        obstaculo.tamanhoY
        
    )
}
function atualiza(){
    obstaculo.posicaoX -= obstaculo.velocidade
}
function verificaColisao() {
    if (
        personagem.posicaoX < obstaculo.posicaoX + obstaculo.tamanhoX &&
        personagem.posicaoX + personagem.tamanhoX > obstaculo.posicaoX &&
        personagem.posicaoY < obstaculo.posicaoY + obstaculo.tamanhoY &&
        personagem.posicaoY + personagem.tamanhoY > obstaculo.posicaoY
    ) {
        houveColisao()
    }
}

function houveColisao(){
    obstaculo.velocidade = 0
        atualiza()

    ctx.fillStyle = 'white'
    ctx.fillRect((canvas.width/2)-200, (canvas.height/2)-50, 400, 100)
    ctx.fillStyle='black'
    ctx.font='50px Arial'
    ctx.fillText('Game Over', (canvas.width/2)-130, (canvas.height/2) +15)
    gameOver = true

}

function loop (){
    ctx.clearRect(0,0,canvas.width, canvas.height)

    atualiza()
    desenhaObstaculo()
    desenhaPersonagem()
    verificaColisao()
    requestAnimationFrame(loop)
}

loop()
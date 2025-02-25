class Veiculo{

    constructor(propriedades){
        this.tipo = propriedades.tipo;
        this.marca = propriedades.marca;
        this.cor = propriedades.cor;
        this.velocidade = propriedades.velocidade;
        this.passageiros = propriedades.passageiros
    }
    acelerar = function(){

        this.velocidade = this.velocidade +5;
        console.log('velocidade tal: ', this.velocidade)
    }

    freiar = function(){
        this.velocidade = this.velocidade -15;
        console.log('velocidade tal: ',this.velocidade)
    }
}

export default Veiculo;
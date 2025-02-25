class Veiculo{
    #velocidade;
    constructor(propriedades){
        this.tipo = propriedades.tipo;
        this.marca = propriedades.marca;
        this.cor = propriedades.cor;
        this.#velocidade = propriedades.velocidade;
        this.passageiros = propriedades.passageiros
    }
    acelerar = function(){

        this.#velocidade = this.#velocidade +5;
       
    }

    freiar = function(){
        this.#velocidade = this.#velocidade -15;
       
    }
}

export default Veiculo;
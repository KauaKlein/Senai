class Veiculo{

    constructor(tipo,marca, cor,velocidade = 0, passageiros=[]){
        this.tipo = tipo;
        this.marca = marca;
        this.cor = cor;
        this.velocidade = velocidade;
        this.passageiros = passageiros
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

const carro = new Veiculo(
    'suv',
    'cherry',
    'vermelho',
    100,
    3
);
console.log(carro);
carro.acelerar();
carro.freiar();
import Veiculo  from "./ex1.js";

class Moto extends Veiculo{
    constructor(propriedades){
    super(propriedades)
    this.tipo = 'Moto'
    }
}
class Barco extends Veiculo{
    constructor(propriedades){
    super(propriedades)
    this.tipo = 'Barco'
    }
}
class Carro extends Veiculo{
    constructor(propriedades){
    super(propriedades)
    this.tipo = 'Carro'
    }
}
let propriedadesMoto = {
    ano: 2025,
    marca: 'honda',
    cor: 'verde'    
}
let propriedadesBarco = {
    ano: 2025,
    cor: 'verde'    
}
let propriedadesCarro = {
    marca:'cherry',
    cor:'vermelho',
    velocidade:100
}

const gtr = new Carro(propriedadesCarro)

gtr.acelerar();
const moto = new Moto(propriedadesMoto);
const barco = new Barco(propriedadesBarco);
// const carro = new Carro(propriedadesCarro);
console.log(moto, barco, gtr );
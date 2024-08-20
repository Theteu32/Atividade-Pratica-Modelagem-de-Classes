import { Bola } from "./classes/Bola";
import { Calculadora } from "./classes/Calculadora";
import { Carro } from "./classes/Carro";
import { ContaCorrente } from "./classes/ContaCorrente";
import { Contador } from "./classes/Contador";
import { BombaCombustivel } from "./classes/Posto";


const bola = new Bola("vermelho", "50cm", "plástico");

const calculadora = new Calculadora();

const carro = new Carro(10);

const conta = new ContaCorrente(1234, "Theus", 500);

const contagem = new Contador();

const bomba = new BombaCombustivel("diesel", 5, 100);

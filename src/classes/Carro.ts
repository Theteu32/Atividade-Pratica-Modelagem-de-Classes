export class Carro {
  consumo: number;
  nivelCombustivel: number;
  constructor(consumo: number) {
    this.consumo = consumo;
    this.nivelCombustivel = 0;
  }

  andar(distancia: number): string {
    const consumoTotal: number = distancia / this.consumo;

    if (this.nivelCombustivel == 0) {
      return "Tanque vazio. Abasteça com urgência!";
    } else if (consumoTotal <= this.nivelCombustivel) {
      this.nivelCombustivel -= consumoTotal;
      return `Distância percorrida: ${distancia}km. Combustível restante: ${this.nivelCombustivel} litros.`;
    } else {
      const distanciaPercorrida: number = this.nivelCombustivel * this.consumo;
      const distanciaRestante: number = distancia - distanciaPercorrida;
      this.nivelCombustivel = 0;
      return `Tanque vazio. Distância percorrida: ${distanciaPercorrida}km. Faltam ${distanciaRestante}km para o destino.`;
    }
  }
  obterGasolina(): string {
    return `O tanque tem ${this.nivelCombustivel} litros restantes.`;
  }
  adicionarGasolina(litros: number): string {
    this.nivelCombustivel += litros;
    return `Tanque abastecido com ${litros} litros. Quantidade total: ${this.nivelCombustivel} litros.`;
  }
}

type Combustivel = "gasolina" | "etanol" | "diesel";

export class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: Combustivel,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  abastecerPorValor(valor: number): string {
    const litros: number = valor / this.valorLitro;

    if (litros > this.quantidadeCombustivel) {
      return "Erro: Bomba vazia. Utilize a próxima bomba.";
    } else {
      this.quantidadeCombustivel -= litros;
      return `Abastecimento completo. 
        Total abastecido: R$${valor.toFixed(2)}, ${litros} litros de ${
        this.tipoCombustivel
      }.`;
    }
  }
  abastecerPorLitro(quantidadeLitros: number): string {
    const valor: number = quantidadeLitros * this.valorLitro;

    if (quantidadeLitros > this.quantidadeCombustivel) {
      return "Erro: Bomba vazia. Utilize a próxima bomba.";
    } else {
      this.quantidadeCombustivel -= quantidadeLitros;
      return `Abastecimento completo. Total abastecido: R$${valor.toFixed(
        2
      )}, ${quantidadeLitros} litros de ${this.tipoCombustivel}.`;
    }
  }
  alterarValor(valor: number): string {
    this.valorLitro = valor;
    return `Valor do litro alterado para R$ ${this.valorLitro.toFixed(2)}.`;
  }
  alterarCombustivel(combustivel: Combustivel): string {
    this.tipoCombustivel = combustivel;
    return `Tipo de combustível alterado para ${this.tipoCombustivel}.`;
  }
  alterarQuantidadeCombustivel(quantidadeCombustivel: number): string {
    this.quantidadeCombustivel = quantidadeCombustivel;
    return `Bomba atualizada. ${this.quantidadeCombustivel} litros disponíveis.`;
  }
  verificarBomba() {
    return `${this.quantidadeCombustivel} litros na bomba.`;
  }
}

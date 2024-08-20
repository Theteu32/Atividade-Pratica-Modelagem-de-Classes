export class Calculadora {
  operacoes: string[];

  constructor(operacoes: string[] = []) {
    this.operacoes = operacoes;
  }

  somar(a: number, b: number): string {
    const resultado: number = a + b;
    this.operacoes.push(`${a} + ${b} = ${resultado}`);
    return `${a} + ${b} = ${resultado}`;
  }
  multiplicar(a: number, b: number): string {
    const resultado: number = a * b;
    this.operacoes.push(`${a} x ${b} = ${resultado}`);
    return `${a} x ${b} = ${resultado}`;
  }
  dividir(a: number, b: number): string {
    const resultado: number = a / b;
    if (resultado == Infinity || resultado == undefined) {
      return "Erro. Escolha outros números.";
    }
    this.operacoes.push(`${a} ÷ ${b} = ${resultado}`);
    return `${a} ÷ ${b} = ${resultado}`;
  }
  subtrair(a: number, b: number): string {
    const resultado: number = a - b;
    this.operacoes.push(`${a} - ${b} = ${resultado}`);
    return `${a} - ${b} = ${resultado}`;
  }
  mostrarOperacoes(): string {
    return "Suas operações matemáticas:\n" + this.operacoes.join("\n");
  }
}

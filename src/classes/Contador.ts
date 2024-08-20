export class Contador {
  contagem: number;

  constructor() {
    this.contagem = 0;
  }

  zerarContador(): string {
    this.contagem = 0;
    return "Contador zerado";
  }
  incrementarContador(): number {
    return ++this.contagem;
  }
  mostrarContador(): string {
    return "O contador está em " + this.contagem;
  }
}

export class Bola {
  cor: string;
  circunferencia: string;
  material: string;

  constructor(cor: string, circunferencia: string, material: string) {
    this.cor = cor;
    this.circunferencia = circunferencia;
    this.material = material;
  }

  trocarCorDaBola(cor: string): string {
    this.cor = cor;
    return `Cor trocada para ${this.cor}.`;
  }
  mostrarCorDaBola(): string {
    return `A cor da bola é ${this.cor}.`;
  }
  pegarBola(): string {
    return `Esta é a bola que você criou!
      Cor: ${this.cor} | Circunferência: ${this.circunferencia} | Material: ${this.material}`;
  }
}

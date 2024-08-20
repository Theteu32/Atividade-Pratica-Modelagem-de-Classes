export class ContaCorrente {
  numeroConta: number;
  nomeCorrentista: string;
  saldoConta?: number;
  transacoes: string[];

  constructor(
    numeroConta: number,
    nomeCorrentista: string,
    saldoConta?: number
  ) {
    this.numeroConta = numeroConta;
    this.nomeCorrentista = nomeCorrentista;
    this.saldoConta = saldoConta ?? 0;
    this.transacoes = [];
  }

  alterarNome(novoNome: string): string {
    this.nomeCorrentista = novoNome;
    return "Nome alterado para " + this.nomeCorrentista;
  }
  fazerDeposito(valor: number): string {
    if (this.saldoConta != undefined) {
      this.saldoConta += valor;
      this.transacoes.push(`+R$${valor.toFixed(2)}`);
      return "Depósito efetuado. Saldo atual: " + this.saldoConta;
    } else {
      this.saldoConta = valor;
      this.transacoes.push(`+R$${valor.toFixed(2)}`);
      return "Depósito efetuado. Saldo atual: " + this.saldoConta;
    }
  }
  fazerSaque(valor: number): string {
    if (this.saldoConta == undefined || valor > this.saldoConta) {
      return (
        "Operação cancelada por saldo insuficiente. Saldo atual: " +
        this.saldoConta
      );
    } else {
      this.saldoConta -= valor;
      this.transacoes.push(`-R$${valor.toFixed(2)}`);
      return "Saque efetuado. Saldo atual: " + this.saldoConta;
    }
  }
  consultarSaldo(): string {
    if (this.saldoConta != undefined) {
      return `Saldo atual: R$${this.saldoConta.toFixed(2)}`;
    } else {
      return "Saldo atual: R$0,00";
    }
  }
  consultarExtrato(): string {
    return  `Seu extrato bancário:${this.transacoes.join()} Saldo: R$${this.saldoConta?.toFixed(2)}`
  }
}

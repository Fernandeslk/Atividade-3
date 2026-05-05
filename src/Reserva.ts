export class Reserva {
  public numeroQuarto: number;
  public nomeHospede: string;
  public dataEntrada: Date;
  public dataSaida: Date;

  constructor(numeroQuarto: number, nomeHospede: string, dataEntrada: Date, dataSaida: Date) {
    this.numeroQuarto = numeroQuarto;
    this.nomeHospede = nomeHospede;
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
  }

  public exibirInformacoes(): string {
    return (
      `Quarto:      ${this.numeroQuarto}\n` +
      `Hóspede:     ${this.nomeHospede}\n` +
      `Entrada:     ${this.dataEntrada.toLocaleDateString("pt-BR")}\n` +
      `Saída:       ${this.dataSaida.toLocaleDateString("pt-BR")}`
    );
  }
}
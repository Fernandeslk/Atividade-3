import { Reserva } from "./Reserva";

export class Hotel {
  private reservas: Reserva[] = [];

  public registrarReserva(reserva: Reserva): void {
    const existe = this.reservas.find((r) => r.numeroQuarto === reserva.numeroQuarto);
    if (existe) {
      console.error(`❌ Erro: Quarto ${reserva.numeroQuarto} já está reservado.`);
      return;
    }
    this.reservas.push(reserva);
    console.log(`✅ Reserva do quarto ${reserva.numeroQuarto} para "${reserva.nomeHospede}" registrada com sucesso!`);
  }

  public cancelarReserva(numeroQuarto: number): void {
    const index = this.reservas.findIndex((r) => r.numeroQuarto === numeroQuarto);
    if (index === -1) {
      console.error(`❌ Erro: Nenhuma reserva encontrada para o quarto ${numeroQuarto}.`);
      return;
    }
    const cancelada = this.reservas.splice(index, 1)[0];
    console.log(`✅ Reserva do quarto ${numeroQuarto} de "${cancelada.nomeHospede}" cancelada com sucesso!`);
  }

  public consultarStatusQuarto(numeroQuarto: number): string {
    const reserva = this.reservas.find((r) => r.numeroQuarto === numeroQuarto);
    return reserva ? "Reservado" : "Disponível";
  }

  public totalReservas(): number {
    return this.reservas.length;
  }
}
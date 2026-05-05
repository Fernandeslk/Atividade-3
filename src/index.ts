import { Reserva } from "./Reserva";
import { Hotel } from "./Hotel";

const hotel = new Hotel();

function registrarReservas(): void {
  console.log("\n══════════════════════════════════");
  console.log("       REGISTRO DE RESERVAS       ");
  console.log("══════════════════════════════════");

  hotel.registrarReserva(new Reserva(101, "Ana Lima",     new Date("2025-06-01"), new Date("2025-06-05")));
  hotel.registrarReserva(new Reserva(202, "Carlos Souza", new Date("2025-06-03"), new Date("2025-06-07")));
  hotel.registrarReserva(new Reserva(303, "Beatriz Rocha",new Date("2025-06-10"), new Date("2025-06-15")));
  hotel.registrarReserva(new Reserva(101, "Duplicado",    new Date("2025-06-01"), new Date("2025-06-02")));
}

function cancelarReservas(): void {
  console.log("\n══════════════════════════════════");
  console.log("       CANCELAMENTO DE RESERVAS   ");
  console.log("══════════════════════════════════");

  hotel.cancelarReserva(202);
  hotel.cancelarReserva(999);
}

function consultarStatus(): void {
  console.log("\n══════════════════════════════════");
  console.log("        STATUS DOS QUARTOS        ");
  console.log("══════════════════════════════════");

  const quartos: number[] = [101, 202, 303, 999];

  for (const numero of quartos) {
    const status: string = hotel.consultarStatusQuarto(numero);
    console.log(`🛏️  Quarto ${numero}: ${status}`);
  }
}

registrarReservas();
cancelarReservas();
consultarStatus();

console.log(`\n🏨 Total de reservas ativas: ${hotel.totalReservas()}`);
let tablero = [];
let fila = [];
let cantidadRojo = 7;
let cantidadAzul = 1;

for (let i = 0; i < 8; i++) {
  fila.push("🟥,".repeat(cantidadRojo) + "🟦,".repeat(cantidadAzul));
  tablero.push(fila);
  fila = [];
  cantidadRojo--;
  cantidadAzul++;
}
for (fila of tablero) {
  console.log(fila.join(","));
}

let contadorRojo = 0;
let contadorAzul = 0;
for (fila of tablero) {
  fila[0].split(",").forEach((cuadro) => {
    if (cuadro === "🟥") {
      contadorRojo++;
    } else if (cuadro === "🟦") {
      contadorAzul++;
    }
  });
}

console.log("Rojos: " + contadorRojo + " Azul: " + contadorAzul);

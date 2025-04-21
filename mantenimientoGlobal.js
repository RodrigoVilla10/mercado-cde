export const appEnMantenimiento = false;

export function mostrarAvisoSiHayMantenimiento() {
  if (appEnMantenimiento) {
    alert("La app está en mantenimiento temporal.");
  }
}
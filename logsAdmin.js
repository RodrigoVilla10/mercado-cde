export function registrarLogAdmin(accion, detalle) {
  const fecha = new Date().toISOString();
  console.log(`[ADMIN LOG - ${fecha}] ${accion}: ${detalle}`);
}
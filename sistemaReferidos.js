export function generarCodigoReferido(nombre) {
  return nombre.toLowerCase().slice(0, 3) + Math.floor(Math.random() * 10000);
}
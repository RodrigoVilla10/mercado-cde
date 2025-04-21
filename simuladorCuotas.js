export function calcularCuotas(precio, cuotas) {
  const interes = 1.15;
  return (precio * interes / cuotas).toFixed(2);
}
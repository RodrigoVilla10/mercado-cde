export default function CardProducto({ nombre, precio }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
}
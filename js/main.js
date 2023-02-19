function calcularPrecioTotal() {
  var ancho = parseFloat(document.getElementById("ancho").value);
  var alto = parseFloat(document.getElementById("alto").value);
  var tipo = document.getElementById("tipo").value;
  var precioPorMetroCuadrado = 0;
  var metrosCuadrados = 0;
  var precioTotal = 0;
  var descuento = 0;
  var cuotas = 0;
  var interes = 0;

  // Tipo de cortina
  if (tipo.toLowerCase() === "blackout") {
    precioPorMetroCuadrado = 8700;
  } else if (tipo.toLowerCase() === "sunscreen") {
    precioPorMetroCuadrado = 9600;
  } else {
    document.getElementById("resultado1").innerHTML = "Tipo de cortina inválido. Por favor, seleccione Black out o Sun screen.";
    return;
  }

  metrosCuadrados = (alto / 100) * (ancho / 100);

  precioTotal = metrosCuadrados * precioPorMetroCuadrado;

  // Método de pago
  var metodoPago = document.getElementById("metodoPago").value;
  if (metodoPago.toLowerCase() === "efectivo") {
    descuento = precioTotal * 0.1;
    precioTotal = precioTotal - descuento;
    document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2) + "<br>DESCUENTO: $" + descuento.toFixed(2);
  } else if (metodoPago === "1" || metodoPago === "3") {
    descuento = 0;
    document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2);
  } else if (metodoPago === "6") {
    interes = precioTotal * 0.15;
    precioTotal = precioTotal + interes;
    document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2) + "<br>Intereses: $" + interes.toFixed(2);
  } else if (metodoPago === "12") {
    interes = precioTotal * 0.28;
    precioTotal = precioTotal + interes;
    document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2) + "<br>Intereses: $" + interes.toFixed(2);
  } else {
    document.getElementById("resultado1").innerHTML = "Método de pago inválido. Por favor, seleccione Efectivo, 1, 3, 6 o 12 cuotas.";
  }
  document.getElementById("resultado1").style.display = "block";
}
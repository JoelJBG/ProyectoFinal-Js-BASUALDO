// Definimos las variables necesarias
var ancho = 0;
var alto = 0;
var tipo = "";
var precioPorMetroCuadrado = 0;
var metrosCuadrados = 0;
var precioTotal = 0;
var descuento = 0;
var cuotas = 0;
var interes = 0;

// Solicitamos los datos al usuario
alert ("Bienvenido al Simulador de Presupuesto de Cortinas Roller");
alto = parseFloat(prompt("Ingrese el alto de la cortina (en centimetros):"));
ancho = parseFloat(prompt("Ingrese el ancho de la cortina (en centimetros):"));
tipo = prompt("Ingrese el tipo de cortina (Black out o Sun screen):");
var metodoPago = prompt("Metodos de pago!! \n- Efectivo 10% de DESCUENTO!! \n- 1 Y 3 cuotas SIN INTERES \n- 6 Cuotas 15% de Interes \n- 12 Cuotas 28% de Interes \n\nIngrese el método de pago: \n (Efectivo, 1, 3, 6 o 12 cuotas):");

// Calculamos el precio por metro cuadrado según el tipo de cortina
if (tipo.toLowerCase() === "black out") {
  precioPorMetroCuadrado = 8700;
} else if (tipo.toLowerCase() === "sun screen") {
  precioPorMetroCuadrado = 9600;
} else {
  alert("Tipo de cortina inválido. Por favor, ingrese Black out o Sun screen.");
}

// Calculamos la cantidad de metros cuadrados
metrosCuadrados = (alto/100)*(ancho/100);

// Calculamos el precio total
precioTotal = metrosCuadrados * precioPorMetroCuadrado;

// Calculamos el descuento o interés según el método de pago
if (metodoPago.toLowerCase() === "efectivo") {
  descuento = precioTotal * 0.1;
  precioTotal = precioTotal - descuento;
} else if (metodoPago === "1" || metodoPago === "3") {
  descuento = 0;
} else if (metodoPago === "6") {
  interes = precioTotal * 0.15;
  precioTotal = precioTotal + interes;
} else if (metodoPago === "12") {
  interes = precioTotal * 0.28;
  precioTotal = precioTotal + interes;
} else {
  alert("Método de pago inválido. Por favor, ingrese Efectivo, 1, 3, 6 o 12 cuotas.");
}

// Mostramos el resultado al usuario
alert("Precio Final es de: $" + precioTotal.toFixed(2) + "\nInterés: $" + interes.toFixed(2));
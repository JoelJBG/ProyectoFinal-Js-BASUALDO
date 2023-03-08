  alert("Segunda ENTREGA - Simulador Presupuestos de Cortinas Black Out/Sun Screen");
// MOSTRAR PRODUCTOS

          const rollers = [
            {
              nombre: 'Blackout',
              precio: 10000,
              stock: true
            },
            {
              nombre: 'SunScreen',
              precio: 12000,
              stock: true
            },
            {
              nombre: 'Duo',
              precio: 23000,
              stock: false
            }
          ];


            rollers.sort((a, b) => a.nombre.localeCompare(b.nombre));

            let mensaje = '';
            
            for (let i = 0; i < rollers.length; i++) {
             
              mensaje += `${rollers[i].nombre}: $ ${rollers[i].precio} x m2, Stock: ${rollers[i].stock ? 'Sí' : 'No'}\n`;
            }


            alert("Bienvenido RollersJs !! \nAquí te mostramos los productos que vendemos en nuestra tienda. \nUsted podra calcular su costo segun sus medidas y el metodo de pago \n \nCortinas Rollers:\n" + mensaje);



// REGISTRAR CLIENTE EN UN ARRAY

const clientes = [
  {
    nombre: "Joel",
    mail: "basualdojjoel@gmail.com",
    telefono: "3467440763"
  }
];

const estaRegistrado = confirm('¿Ya está registrado como cliente? Click en cancelar si no lo esta!');


if (estaRegistrado) {
  const nombre = prompt('Ingrese su nombre');
  
  const clienteExistente = clientes.find(cliente => cliente.nombre === nombre);
  
  if (clienteExistente) {
    
    alert(`Bienvenido/a de nuevo, ${clienteExistente.nombre}!`);
  } else {

    alert('Lo siento, no pudimos encontrar su registro como cliente.');
  }
} else {
  
  
  const nombre = prompt('Ingrese su nombre');
  const email = prompt('Ingrese su correo electrónico');
  const telefono = prompt('Ingrese su número de teléfono');
  const nuevoCliente = { nombre, email, telefono };
  clientes.push(nuevoCliente);
  alert(`¡Bienvenido/a, ${nombre}! Gracias por registrarse como cliente.`);
}


// PEDIR DATOS DE LA CORTINA A CALCULAR

function calcularPrecio() {
  const tipo = prompt('Ingresa el tipo de roller (Blackout, SunScreen o Duo):');
  const medidas = prompt('Ingresa las medidas separadas por una coma (ancho, alto):');


  const rollerSeleccionado = rollers.find(roller => roller.nombre === tipo);

  if (!rollerSeleccionado) {
    alert('No se encontró el roller seleccionado.');
    return;
  }

  if (!rollerSeleccionado.stock) {
    alert('El roller seleccionado no está en stock.');
    return;
  }

  

  const precioBase = rollerSeleccionado.precio * (ancho * alto) / 10000;
  
  const [ancho, alto] = medidas.split(',').map(Number);

  const metodoPago = prompt('Ingresa el método de pago (Efectivo, 1 cuota, 3 cuotas, 6 cuotas o 12 cuotas:\n\nEfectivo 20% de descuento\n 1 y 3 cuotas SIN INTERES!!.\n 6 cuotas 30% de Interes.\n 12 cuotas 50% de interes.');

  let precioFinal;

  switch (metodoPago.toLowerCase()) {
    case 'efectivo':
      precioFinal = precioBase * 0.8;
      break;
    case '1 cuota':
      precioFinal = precioBase;
      break;
    case '3 cuotas':
      precioFinal = precioBase;
      break;
    case '6 cuotas':
      precioFinal = precioBase * 1.3;
      break;
    case '12 cuotas':
      precioFinal = precioBase * 1.5;
      break;
    default:
      alert('El método de pago ingresado no es válido.');
      return;
  }

  alert(`El precio final del roller ${tipo} es de $${precioFinal.toFixed(2)}.`);
}

calcularPrecio();


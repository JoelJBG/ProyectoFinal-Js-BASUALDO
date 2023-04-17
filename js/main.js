const productos = [
  {
    id: 1,
    nombre: "blackout",
    precio: 10000,
  },
  {
    id: 2,
    nombre: "sunscreen",
    precio: 15000,
  },
  {
    id: 3,
    nombre: "duo",
    precio: 18000,
  }
]
.concat


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
      precioPorMetroCuadrado = 10000;
    } else if (tipo.toLowerCase() === "sunscreen") {
      precioPorMetroCuadrado = 15000;
    } else if (tipo.toLowerCase() === "duo") {
        precioPorMetroCuadrado = 18000;}
    else {
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
      document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2) + "<br>DESCUENTO: $" + descuento.toFixed(2)+"<br><br>";

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

  var botonAgregar = document.createElement("button");
  botonAgregar.innerHTML = "Agregar al carrito";
  botonAgregar.className = "boton-agregar"; 


  var resultado1 = document.getElementById("resultado1");
  resultado1.appendChild(botonAgregar);


  botonAgregar.onclick = function() {

  agregarAlCarrito(precioTotal);
  }}



var carrito = [];


function agregarAlCarrito(precio) {
  carrito.push(precio);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

function mostrarOcultarCarrito() {
  var carritoDesplegable = document.getElementById("carrito-desplegable");
  if (carritoDesplegable.style.right === "-320px") {
    mostrarCarrito();
    carritoDesplegable.style.right = "0";
  } else {
    carritoDesplegable.style.right = "-320px";
  }
}

function mostrarCarrito() {
  var carritoHTML = "";
  var carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
  for (var i = 0; i < carrito.length; i++) {
    carritoHTML += "<li>Precio Cortina " + ": $" + carrito[i].toFixed(2) + " <button class='boton-eliminar' onclick='eliminarDelCarrito(" + i + ")'>Eliminar</button></li>";
  }
  var carritoLista = document.getElementById("carrito-lista");
  carritoLista.innerHTML = carritoHTML;}
  
  document.getElementById("btn-cerrar-carrito").addEventListener("click", function() {
  document.getElementById("carrito-desplegable").style.right = "-320px";
  
});

function eliminarDelCarrito(index) {
  var carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

  document.getElementById("btn-agregar-carrito").addEventListener("click", function() {
  
  var precio = parseFloat(document.getElementById("precio").value);
  var carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  } else {
    carrito = [];
  }
  carrito.push(precio);
  localStorage.setItem("carrito", JSON.stringify(carrito));

});
  document.getElementById("btn-finalizar-compra").addEventListener("click", function() {
    
    
    localStorage.clear();
    actualizarCarrito();
    document.getElementById("carrito-desplegable").style.right = "-320px";
  });





mostrarCarrito();


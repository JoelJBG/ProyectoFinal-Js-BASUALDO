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

    var ancho;
    var alto;
    var tipo;
    var precioPorMetroCuadrado;
    var metrosCuadrados;
    var precioTotal;
    var descuento;
    var cuotas;
    var interes;

function calcularPrecioTotal() {
    ancho = parseFloat(document.getElementById("ancho").value);
    alto = parseFloat(document.getElementById("alto").value);
    tipo = document.getElementById("tipo").value;
    precioPorMetroCuadrado = 0;
    metrosCuadrados = 0;
    precioTotal = 0;
    descuento = 0;
    cuotas = 0;
    interes = 0;


  
    // ----------------------------------------------  Tipo de cortina //
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
  
    // ------------------------------------------ Método de pago    //
    var metodoPago = document.getElementById("metodoPago").value;
    
    document.addEventListener("DOMContentLoaded", function() {
      var metodoDePago = metodoPago; 
      document.getElementById("metodo-pago").textContent = metodoDePago;
    });
    
    if (metodoPago.toLowerCase() === "efectivo") {
      descuento = precioTotal * 0.1;
      precioTotal = precioTotal - descuento;
      document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2) + "<br>DESCUENTO: $" + descuento.toFixed(2)+"<br><br>";

    } else if (metodoPago === "1" || metodoPago === "3") {
      descuento = 0;
      document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2)+ "<br>";
    } else if (metodoPago === "6") {
      interes = precioTotal * 0.15;
      precioTotal = precioTotal + interes;
      document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2) + "<br>Intereses: $" + interes.toFixed(2)+ "<br>";
    } else if (metodoPago === "12") {
      interes = precioTotal * 0.28;
      precioTotal = precioTotal + interes;
      document.getElementById("resultado1").innerHTML = "Precio Final es de: $" + precioTotal.toFixed(2) + "<br>Intereses: $" + interes.toFixed(2) + "<br>";
    } else {
      document.getElementById("resultado1").innerHTML = "Error Ingrese nuevamente los datos.<br>";
      
    }
    document.getElementById("resultado1").style.display = "block";
    
    var botonAgregar = document.createElement("button");
    botonAgregar.innerHTML = "Agregar al carrito";
    botonAgregar.className = "boton-agregar"; 
    botonAgregar.id = "boton-agregar"; 
  
  
    var resultado1 = document.getElementById("resultado1");
    resultado1.appendChild(botonAgregar);
  
  
    botonAgregar.onclick = function() {
  
    agregarAlCarrito(precioTotal);
    }
    
  const resultado = document.getElementById("resultado1");
  resultado.scrollIntoView({behavior: "smooth"});

  }


var carrito = [];

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


function agregarAlCarrito(precio) {
  var ancho = parseFloat(document.getElementById("ancho").value);
  var alto = parseFloat(document.getElementById("alto").value);
  var tipo = document.getElementById("tipo").value;
  var metodoPago = document.getElementById("metodoPago").value;
  var metrosCuadrados = (alto / 100) * (ancho / 100);
  
  if (metrosCuadrados <= 0 || !["blackout", "sunscreen", "duo"].includes(tipo.toLowerCase()) || !["efectivo", "1", "3", "6", "12"].includes(metodoPago.toLowerCase())) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese medidas válidas, un tipo de cortina válido y un método de pago válido.'
    });
    return;
  }
  
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Agregado al Carrito',
    showConfirmButton: false,
    timer: 1500
  })
  
  carrito.push(precio);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito(); 
  mostrarOcultarCarrito();
}
 
document.getElementById("boton").addEventListener("click", function() {
  var precio = parseFloat(document.getElementById("precio").value);
  var carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  } else {
    carrito = [];
  }
  carrito.push(precio);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarritoEnPantalla();
});




  function eliminarDelCarrito(index) {
    var carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
    }
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    actualizarCarritoEnPantalla();
  }
  
  function actualizarCarritoEnPantalla() {
    var carritoGuardado = localStorage.getItem("carrito");
    var carrito;
    if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
    } else {
      carrito = [];
    }
    var productosCarrito = document.getElementsByClassName("producto-carrito");
    for (var i = 0; i < productosCarrito.length; i++) {
      productosCarrito[i].remove();
    }
    for (var i = 0; i < carrito.length; i++) {
      var producto = document.createElement("div");
      producto.className = "producto-carrito";
      producto.innerHTML = "Producto " + (i + 1) + ": $" + carrito[i];
      var botonEliminar = document.createElement("button");
      botonEliminar.innerHTML = "Eliminar";
      botonEliminar.onclick = (function(index) {
        return function() {
          eliminarDelCarrito(index);
        };
      })(i);
      producto.appendChild(botonEliminar);
      document.getElementById("lista-carrito").appendChild(producto);
    }
  }
  

  
  
  document.getElementById("carrito-desplegable").style.right = "-320px";
  
  document.getElementById("btn-finalizar-compra").addEventListener("click", function() {
    var carrito = document.getElementById("carrito-lista");
    if (carrito.children.length > 0) {
    window.location.href = "./formCompras.html";
    } else {
    alert("No hay elementos en el carrito");
    }
    });

    const btnConfirmarCompra = document.getElementById('btn-confirmar-compra');

    btnConfirmarCompra.addEventListener('click', () => {
      // Limpiar el carrito (código aquí)
  
      Swal.fire({
        icon: 'success',
        title: 'Compra finalizada',
        text: 'Gracias por su compra!',
        timer: 2500,
      });
    });
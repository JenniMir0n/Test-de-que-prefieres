// Variable global para almacenar las respuestas
var respuestas = [];

// Función para procesar el envío del formulario
function registrar() {
  // Obtener respuestas y almacenarlas en la variable global
  var respuesta1 = document.querySelector('input[name="p1"]:checked').value;
  var respuesta2 = document.querySelector('input[name="p2"]:checked').value;
  var respuesta3 = document.querySelector('input[name="p3"]:checked').value;
  var respuesta4 = document.querySelector('input[name="p4"]:checked').value;
  var respuesta5 = document.querySelector('input[name="p5"]:checked').value;
  var respuesta6 = document.querySelector('input[name="p6"]:checked').value;
  
  // Almacenar las respuestas en el array global
  respuestas.push(respuesta1);
  
  // Mostrar la gráfica
  mostrarGrafica();
}

// Función para mostrar la gráfica de respuestas
function mostrarGrafica() {
  var graficaDiv = document.getElementById("grafica");
  
  // Calcular el porcentaje de cada respuesta
  var totalRespuestas = respuestas.length;
  var conteoRespuestas = {};
  respuestas.forEach(function(respuesta) {
    conteoRespuestas[respuesta] = (conteoRespuestas[respuesta] || 0) + 1;
  });
  
  // Generar la gráfica de barras
  graficaDiv.innerHTML = "<h2>Resultados</h2>";
  for (var respuesta in conteoRespuestas) {
    var porcentaje = (conteoRespuestas[respuesta] / totalRespuestas) * 100;
    graficaDiv.innerHTML += "<p>" + respuesta + ": " + conteoRespuestas[respuesta].toFixed(2)</p>";
  }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Agregar el evento clic al botón de enviar
  var botonEnviar = document.querySelector("#enviarButton");
  botonEnviar.addEventListener("click", registrar);
});
function mostrarGrafica() {
  var ctx = document.getElementById('grafica').getContext('2d');
  var totalRespuestas = respuestas.length;

  // Calcular el número de respuestas por opción
  var opciones = {};
  respuestas.forEach(function(respuesta) {
    opciones[respuesta] = (opciones[respuesta] || 0) + 1;
  });

  // Extraer las etiquetas y los datos de la gráfica
  var labels = Object.keys(opciones);
  var data = Object.values(opciones);

  // Crear la gráfica utilizando Chart.js
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Total de personas encuestadas: ' + totalRespuestas,
        backgroundColor: 'black',
        borderColor: 'yellow',
        borderWidth: 5,
        data: data
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numero = parseInt(prompt("Ingresa un numero"));

function tablaMultiplicar(numero) {
  const tabla = document.getElementById("tabla");
  tabla.innerHTML = `<tr class="fw-bold text-center" id="titulo"></tr>`;
  const titulo = document.getElementById("titulo");
  titulo.innerHTML = `<td class="text-info-emphasis fs-4">Tabla del ${numero}</td>`;
  for (let i = 1; i <= 10; i++) {
    const producto = numero * i;
    tabla.innerHTML += `<tr class="fw-semibold text-center" id="${i}"></tr>`;
    const filas = document.getElementById(`${i}`);
    filas.innerHTML += `<td>${numero} x ${i} = ${producto}</td>`;
  }
}

tablaMultiplicar(numero);

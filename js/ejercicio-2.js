//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

function listarCiudades(nota) {
  pantalla.innerHTML += `<h2>Lista de ciudades</h2>`;
  pantalla.innerHTML += `<p>Nota: ${nota} </p>`;
  let listaCiudades = `<ul>`;
  for (let li = 0; li < ciudades.length; li++) {
    listaCiudades += `<li> ${li+1} - ${ciudades[li]} </li>`;
  }
  listaCiudades += `</ul>`;
  pantalla.innerHTML += listaCiudades;
  pantalla.innerHTML += `<p>El arreglo ciudades tiene ${ciudades.length} elementos</p>`;
}

const ciudades = [];
let i = -1;

do {
  const nombreCiudades = prompt("Ingresa el nombre de una ciudad");
  if (nombreCiudades !== null) {
    ciudades.push(nombreCiudades);
  }
  i++;
} while (ciudades[i] !== undefined);

const pantalla = document.getElementById("pantalla");

listarCiudades('Muestro por pantalla el arreglo generado con las ciudades ingresadas')



pantalla.innerHTML += `<ul>`;
pantalla.innerHTML += `<li>Elemento en 1er posicion: ${ciudades[0]} </li>`;
pantalla.innerHTML += `<li>Elemento en 3ra posicion: ${ciudades[2]} </li>`;
pantalla.innerHTML += `<li>Elemento en ultima posicion: ${ciudades[ciudades.length - 1]} </li>`;
pantalla.innerHTML += `</ul>`;

ciudades.push("Paris");
listarCiudades('Muestro el arreglo agregando Paris al final')

pantalla.innerHTML += `<p>El elemento que ocupa la segunda posicion del arreglo es: ${ciudades[1]}</p>`;

ciudades[1] = 'Barcelona'
listarCiudades('Sustituyo la segunda ciudad por Barcelona')

console.log(ciudades);

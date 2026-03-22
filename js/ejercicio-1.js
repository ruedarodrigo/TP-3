//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

function mostrarMeses() {
    const pantalla = document.getElementById('pantalla')
pantalla.innerHTML = `<h2>Lista de meses </h2>`
let listaMeses = `<ul>`
for(let i = 0; i < meses.length; i++){
    listaMeses += `<li>${meses[i]}</li>`
}
listaMeses += `</ul>`
pantalla.innerHTML += listaMeses
}

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

mostrarMeses()


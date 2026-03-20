//6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

const largo = Number(prompt('Ingresa el valor de un lado del rectangulo'))
const ancho = Number(prompt('Ingresa el valor del otro lado del rectangulo'))
const pantalla = document.getElementById("pantalla");

const perimetro = (largo, ancho) => (2*(largo + ancho))

pantalla.innerHTML = `<p>El perimetro del rectangulo es: ${perimetro(largo, ancho)} </p>`

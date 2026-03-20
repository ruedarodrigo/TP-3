//4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function parOimpar (numero){
    const pantalla = document.getElementById('pantalla')
    const resto = numero%2
    if(resto === 0){
        pantalla.innerHTML = `<p>El numero que ingresaste es par</p>`
    } else{
        pantalla.innerHTML = `<p>El numero que ingresaste es impar</p>`
    }
}

const numero = parseInt(prompt('Ingresa un numero'))
parOimpar(numero)
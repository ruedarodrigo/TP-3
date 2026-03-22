//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const resultadoSumas = [];

for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma = dado1+dado2
  resultadoSumas.push(suma)
}
console.log(resultadoSumas)

const apariciones = [] // [suma,cantidad coincidencias]

for(let res = 2; res <= 12; res++){
    let cantidad = 0
    const coincidencias = []
    for(let c = 0; c < resultadoSumas.length; c++){
        if(res === resultadoSumas[c]){
            cantidad++
        }
    }
    if(cantidad !== 0){
        coincidencias.push(res)
        coincidencias.push(cantidad)
        apariciones.push(coincidencias)
    }
}
console.log(apariciones)




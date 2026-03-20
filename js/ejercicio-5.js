//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function mayusOminus(cadena) {
  const pantalla = document.getElementById("pantalla");
  let mayus = 0;
  let minus = 0;
  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena.charAt(i);
    if (letra === letra.toUpperCase() && letra !== " ") {
      mayus++;
    } else if (letra !== " ") {
      minus++;
    }
  }
  console.log(mayus);
  console.log(minus);
  if (mayus === 0) {
    pantalla.innerHTML = `<p>El texto "${cadena}", esta formado solo por minusculas</p>`;
  } else if (minus === 0) {
    pantalla.innerHTML = `<p>El texto "${cadena}", esta formado solo por MAYUSCULAS</p>`;
  } else {
    pantalla.innerHTML = `<p>El texto "${cadena}", esta formado por ${minus} letras minusculas y ${mayus} letras mayusculas </p>`;
  }
}

const cadena = prompt("Ingresa una cadena de texto");
mayusOminus(cadena);

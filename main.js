//Se precisa un algoritmo que reciba por prompt el mail
//del usuario y que valide si este mail contiene un "@".
//Para ello se precisará un bucle que pueda recorrer
//cada caracter de este valor y que en base a una condición,
//refleje como alerta si "Es un mail válido" o
//"Es un mail inválido", en el caso de que no contenga "@".

const email = prompt("ingrese su mail");
const emailRegistrado = "Santigamer240@gmail.com";

console.log(email);

for (let i = 0; i < email.length; i++) {
  if (email === emailRegistrado) {
    console.log("Sesion iniciada correctamente");
    alert("Sesion iniciada correctamente");
    break;
  }
  if (email !== "@") {
    console.log("Error al ingresar E-mail");
    alert("Error al ingresar E-mail");
    break;
  } else if (email !== "@") {
    console.log("mail inexistente");
    alert("mail inexistente");
    break;
  }
}

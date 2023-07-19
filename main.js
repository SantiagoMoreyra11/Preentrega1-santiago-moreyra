//Se precisa un algoritmo que reciba por prompt el mail
//del usuario y que valide si este mail contiene un "@".
//Para ello se precisará un bucle que pueda recorrer
//cada caracter de este valor y que en base a una condición,
//refleje como alerta si "Es un mail válido" o
//"Es un mail inválido", en el caso de que no contenga "@".

//ejercicios 1 Moreyra Santiago

const email = prompt("ingrese su mail");
const emailRegistrado = "Santigamer240@gmail.com";
ContieneArroba = false;
console.log(email);

for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    ContieneArroba = true;
    break;
  }
}
if (ContieneArroba) {
  if (ContieneArroba == true && emailRegistrado === email) {
    console.log("Sesion iniciada correctamente");
    alert("Sesion iniciada correctamente");
  } else if (ContieneArroba == true) {
    console.log("Su mail es incorrecto");
    alert("Su mail es incorrecto");
  }
} else {
  alert("Mail no valido");
  console.log("Mail no valido");
}

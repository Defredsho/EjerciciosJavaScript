function areaCuadrado() {
  let lado;
  lado = parseInt(prompt("Ingrese el lado del cuadrado"));
  alert("El area del cuadrado es " + lado*lado)
}
const button = document.querySelector("#areaCuadrado");
button.addEventListener("click", areaCuadrado)

function areaCirculo() {
  let pi = 3.14;
  let radio, area;
  radio = parseInt(prompt("Ingrese el radio del Circulo"));
  area = pi*(radio*radio);
  if (areaCirculo) {
    Swal.fire(`El área del circulo es: ${area}`)
  }
}

const button2 = document.querySelector("#areaCirculo");
button2.addEventListener("click", areaCirculo)

function conversorGrados () {
  let grados, operacion;
  grados = parseInt(prompt("Ingrese los grados F a convertir"));
  operacion = (grados - 32) * 5/9;
  if (conversorGrados) {
    Swal.fire(`El resultado en grados es: ${operacion}`)
  }
}
const button3 = document.querySelector("#conversorGrados");
button3.addEventListener("click", conversorGrados)

function suma() {
  let num1 , num2;
  num1 = parseInt(prompt("Ingrese el numero 1"));
  num2 = parseInt(prompt("Ingrese el numero 2"))
  let sum = num1 + num2;
  let rest = num1 - num2;
  if (suma){
    Swal.fire(`El resultado de la suma es: ${sum} la resta es: ${rest}`)
  }
}
const button4 = document.querySelector("#suma");
button4.addEventListener("click", suma)

function mayor() {
  let numMayor1, numMayor2;
  numMayor1 = parseInt(prompt("Ingrese el numero 1"));
  numMayor2 = parseInt(prompt("Ingrese el numero 2"));
  let may;
  if (numMayor1 > numMayor2)
    may = numMayor1;
  else
    may = numMayor2;
  if (mayor){
    Swal.fire(`El numero mayor es: ${may}`)
  }

}
const button5 = document.querySelector("#mayor");
button5.addEventListener("click", mayor)

function conteo(){
  for (let i = 1; i <= 7;i++){

      Swal.fire(`numero: ${i}`)

  }

}
const button6 = document.querySelector("#conteo");
button6.addEventListener("click", conteo)

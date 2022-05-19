rotulo.innerHTML = "Verificar si son multiplos";
let num1 = document.getElementById("dato1.value");
let num2 = document.getElementById("dato2.value");
let btnCalcular = document.getElementById("btnCalcular");

function esMultiplo(num1: number, num2: number): boolean {
  return num1 % num2 === 0;
}

btnCalcular.addEventListener("click", () => {
  let num1: number = Number(dato1.value);
  let num2: number = Number(dato2.value);
  if (esMultiplo(num1, num2)) {
    console.log(num1 + " ES múltiplo de " + num2);
  } else {
    console.log(num1 + " NO es múltiplo de " + num2);
  }
});

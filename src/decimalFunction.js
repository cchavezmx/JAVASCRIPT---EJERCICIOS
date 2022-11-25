// Completa la funcion que tome un numero (a) como argumento
// Redondea a a 2 digitos despues de la coma
// Retorna el numero redondeado
// Ejemplo: decimalFunction(1.2345) => 1.23

const decimalFunction = (number) => {
  return Number (number.toFixed(2))
}

export default decimalFunction

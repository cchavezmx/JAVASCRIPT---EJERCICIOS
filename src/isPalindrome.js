// la funcion isPalindrome recibe un numero entero (x)
// y debe retornar true si el numero es palindromo, de lo contrario debe retornar false

const isPalindrome = function (x) {
  const numeroAString = x.toString('')
  const stringAlReves = numeroAString.reverse()
  const stringANumero = stringAlReves.join('')

   if (x === stringANumero.Number)
    return Boolean
}

export default isPalindrome

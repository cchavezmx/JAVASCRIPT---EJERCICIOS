// la funcion isPalindrome recibe un numero entero (x)
// y debe retornar true si el numero es palindromo, de lo contrario debe retornar false

const isPalindrome = function (x) {
   const xcomoString = String(x)
   const xcomoArreglo = xcomoString.split('')
   const xreversa = xcomoArreglo.reverse()
   const xjunto = xreversa.join('')
   const xjuntoComoNumero = Number(xjunto)
   if (xjuntoComoNumero === x) {
     return true
   } else {
     return false
   }
}

export default isPalindrome

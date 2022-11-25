// completa la funcion, esta funcion recibe 6 valores (a,b,c,d,e,f) como argumentos
// suma a y b
// luego resta por c
// luego multiplica por d y divide por e
// finalmente eleva a la potencia de f y retorna el resultado
// Tipp: ten en cuenta el orden

const basicMathOperations = (a, b, c, d, e, f) => {
  const suma = a + b
  const resta = suma - c
  const multiplica = resta * d
  const divide = multiplica / e
  const potencia = divide ** f
    return potencia
}

export default basicMathOperations

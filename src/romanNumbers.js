// Termina la funcion.
// la funcion recibe un valor numero romano (string), la funcion debe devolver el numero decimal (number) equivalente al numero romano recibido.
// ejemplos:
// romanNumbers('I') => 1
// romanNumbers('III') => 3
// recuerda los numeros romanos:
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const romanNumbers = (roman) => {
    const diccionario = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const splitRomanos = roman.split('')

    let contador = 0
        for (let i = 0; i < splitRomanos.length; i++) {
            const actual = diccionario[splitRomanos[i]]
            const siguiente = diccionario[splitRomanos[i + 1]]

            if (actual < siguiente) {
                contador = contador - actual
            } else {
                contador = contador + actual
            }
        }
}

export default romanNumbers

import { describe, expect, it } from 'vitest'
import fizzbuzz from '../src/fizzbuzz'

/*
 Escribe una funcion que al pasar un numero:
  - muestra "fizz" si el numero es divisible por 3
  - muestra "buzz" si el numero es divisible por 5
  - muestra "fizzbuzz" si el numero es divisible por 3 y 5
  - muestra el numero si no es divisible por 3 ni 5
*/

describe('fizzbuzz', () => {
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw if not a number is provider as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw if not a specifuc message if not a number is provider as parameter', () => {
    expect(() => fizzbuzz()).toThrow(/Not a number/)
  })

  it('should retunr 1 if number provider is 1', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should retunr fizz if number provider is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should retunr fizz if number provider is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
  })

  it('should return bazz is number provider is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })

  it('should return fizzbuzz if number provider is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
  })
})

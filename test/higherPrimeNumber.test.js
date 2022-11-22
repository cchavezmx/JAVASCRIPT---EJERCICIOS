import { describe, expect, it } from 'vitest'
import higherPrimeNumber from '../src/higherPrimeNumber'

describe('higherPrimeNumber', () => {
  it('should be a function', () => {
    expect(typeof higherPrimeNumber).toBe('function')
  })

  it('should return the next higher prime number', () => {
    expect(higherPrimeNumber(1)).toBe('No es un numero primo')
    expect(higherPrimeNumber(2)).toBe(2)
    expect(higherPrimeNumber(3)).toBe(2)
    expect(higherPrimeNumber(4)).toBe(4)
    expect(higherPrimeNumber(15)).toBe(14)
    expect(higherPrimeNumber(23)).toBe(22)
  })
})

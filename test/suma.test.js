import { describe, expect, it } from 'vitest'
import suma from '../src/suma'

describe('suma', () => {
  it('should be a function', () => {
    expect(typeof suma).toBe('function')
  })

  it('should return a number', () => {
    expect(typeof suma(1, 1)).toBe('number')
  })

  it('should return the sum of two numbers', () => {
    expect(suma(1, 1)).toBe(2)
    expect(suma(2, 2)).toBe(4)
    expect(suma(3, 3)).toBe(6)
    expect(suma(4, '4')).toBe(8)
    expect(suma(5, 'test')).toBe('Error debes pasar dos numeros')
  })
})

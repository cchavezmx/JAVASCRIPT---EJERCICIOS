import { describe, expect, it } from 'vitest'
import basicMathOperations from '../src/basicMathOperations'

describe('basicMathOperations', () => {
  it('should be a function', () => {
    expect(typeof basicMathOperations).toBe('function')
  })

  it('should return a number', () => {
    expect(typeof basicMathOperations(1, 1)).toBe('number')
  })

  it('should return the sum of two numbers', () => {
    expect(basicMathOperations(6, 5, 4, 3, 2, 1)).toBe(10.5)
    expect(basicMathOperations(6, 2, 1, 4, 2, 3)).toBe(2744)
    expect(basicMathOperations(2, 3, 6, 4, 2, 3)).toBe(-8)
  })
})

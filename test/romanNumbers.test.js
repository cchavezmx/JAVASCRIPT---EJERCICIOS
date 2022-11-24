import { describe, expect, it } from 'vitest'
import romanNumbers from '../src/romanNumbers'

describe('romanNumbers', () => {
  it('should be a function', () => {
    expect(typeof romanNumbers).toBe('function')
  })

  it('should return a number', () => {
    expect(typeof romanNumbers('I')).toBe('number')
  })

  it('should return the correct number', () => {
    expect(romanNumbers('I')).toBe(1)
    expect(romanNumbers('III')).toBe(3)
    expect(romanNumbers('IV')).toBe(4)
    expect(romanNumbers('LVIII')).toBe(58)
    expect(romanNumbers('MCMXCIV')).toBe(1994)
  })
})

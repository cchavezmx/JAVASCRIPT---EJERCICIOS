import { describe, expect, it } from 'vitest'
import decimalFunction from '../src/decimalFunction'

describe('decimalFunction', () => {
  it('should be a function', () => {
    expect(typeof decimalFunction).toBe('function')
  })

  it('should return a number', () => {
    expect(typeof decimalFunction(1)).toBe('number')
  })

  it('should return only 2 deciamales', () => {
    expect(decimalFunction(2.12397)).toBe(2.12)
    expect(decimalFunction(3.136)).toBe(3.14)
    expect(decimalFunction(1.12397)).toBe(1.12)
    expect(decimalFunction(26.1379)).toBe(26.14)
  })
})

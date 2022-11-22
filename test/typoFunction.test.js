import { describe, it, expect } from 'vitest'
import typoFunction from '../src/typoFunction'

describe('typoFunction', () => {
  it('should be a function', () => {
    expect(typeof typoFunction).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof typoFunction('')).toBe('string')
  })

  it('should return a string with the type of the value', () => {
    expect(typoFunction('')).toBe('string')
    expect(typoFunction(1)).toBe('number')
    expect(typoFunction(true)).toBe('boolean')
    expect(typoFunction(null)).toBe('object')
    expect(typoFunction(undefined)).toBe('undefined')
    expect(typoFunction({})).toBe('object')
    expect(typoFunction([])).toBe('object')
    expect(typoFunction(() => {})).toBe('function')
  })
})

import { describe, expect, it } from 'vitest'
import splitNumbers from '../src/splitNumbers'

describe('splitNumbers', () => {
  it('should be a function', () => {
    expect(typeof splitNumbers).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(splitNumbers(123))).toBe(true)
  })

  it('should return an array with the number digits', () => {
    expect(splitNumbers(10)).toEqual([1, 0])
    expect(splitNumbers(931)).toEqual([9, 3, 1])
    expect(splitNumbers(193278)).toEqual([1, 9, 3, 2, 7, 8])
  })
})

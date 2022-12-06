import { describe, expect, it } from 'vitest'
import removeDuplicates from '../src/removeDuplicates.js'

describe('removeDuplicates', () => {
  it('should be a function', () => {
    expect(typeof removeDuplicates).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(removeDuplicates([]))).toBe(true)
  })

  it('should return an array with the duplicates removed', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10, 10, 10, 10])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

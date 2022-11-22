import { expect, describe, it } from 'vitest'
import concatenarStrings from '../src/concatenarStrings'

describe('concatenarStrings', () => {
  it('should be a function', () => {
    expect(typeof concatenarStrings).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof concatenarStrings('')).toBe('string')
  })

  it('should return a string with the concatenation of two strings', () => {
    expect(concatenarStrings('cheese', 'cake')).toBe('cheesecake')
    expect(concatenarStrings('lips', 's')).toBe('slips')
    expect(concatenarStrings('Java', 'script')).toBe('Javascript')
    expect(concatenarStrings(' think, therefore I am', 'I')).toBe('I think, therefore I am')
  })
})

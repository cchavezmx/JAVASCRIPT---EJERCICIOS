import { describe, expect, it } from 'vitest'
import removeLetters from '../src/removeLetters'

describe('removeLetters', () => {
  it('should be a function', () => {
    expect(typeof removeLetters).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof removeLetters('test', 't')).toBe('string')
  })

  it('should return a string without the letters', () => {
    expect(removeLetters('abcdefg', 3)).toBe('defg')
    expect(removeLetters('1234', 3)).toBe('4')
    expect(removeLetters('fgedcba', 3)).toBe('dcba')
  })
})

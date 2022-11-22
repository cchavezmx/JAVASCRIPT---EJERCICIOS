import { describe, expect, it } from 'vitest'
import getStringPosition from '../src/getStringPosition'

describe('getStringPosition', () => {
  it('should be a function', () => {
    expect(typeof getStringPosition).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof getStringPosition('test', 0)).toBe('string')
  })

  it('should return the character in the position', () => {
    expect(getStringPosition('test', 0)).toBe('t')
    expect(getStringPosition('test', 1)).toBe('e')
    expect(getStringPosition('test', 2)).toBe('s')
    expect(getStringPosition('test', 3)).toBe('t')
  })
})

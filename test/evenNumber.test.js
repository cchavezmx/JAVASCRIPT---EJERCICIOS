import { describe, expect, it } from 'vitest'
import evenNumber from '../src/evenNumber'

describe('evenNumber', () => {
  it('should be a function', () => {
    expect(typeof evenNumber).toBe('function')
  })

  it('should return a boolean', () => {
    expect(typeof evenNumber(1)).toBe('boolean')
  })

  it('should return true if the number is even', () => {
    expect(evenNumber(10)).toBe(true)
    expect(evenNumber(-4)).toBe(true)
  })

  it('should return false if the number is odd', () => {
    expect(evenNumber(5)).toBe(false)
    expect(evenNumber(-111)).toBe(false)
  })
})

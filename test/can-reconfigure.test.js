import { describe, expect, it } from 'vitest'
import canReconfigure from '../src/canReconfigure.js'

describe('can reconfigure', () => {
  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow(/Config must be a string/)
  })

  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a', 1)).toThrow(/Config must be a string on second parameter/)
  })

  it('should be return a boolean', () => {
    expect(typeof canReconfigure('a', 'b')).toBe('boolean')
  })

  it('should be return false if string provider have a different lenght', () => {
    expect(canReconfigure('ABC', 'BC')).toBe(false)
  })

  it('should be return flase if sitrng privider not have a unique letters', () => {
    expect(canReconfigure('AAA', 'ZYW')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})

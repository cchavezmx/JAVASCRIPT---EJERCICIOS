import { describe, expect, it } from 'vitest'
import nombresFinder from '../src/nombresFinder'

describe('nombresFinder', () => {
  it('should be a function', () => {
    expect(typeof nombresFinder).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(nombresFinder(''))).toBe(true)
  })

  it('should return an array with the names', () => {
    expect(nombresFinder('Juan, Pedro, Maria, Jose, Luis, Ana, Maria, Jose, Luis, Ana', 'J')).toHaveLength(3)
    expect(nombresFinder('Juan, Pedro, Maria, Jose, Luis, Ana, Maria, Jose, Luis, Ana', 'M')).toHaveLength(2)
    expect(nombresFinder('Juan, Pedro, Maria, Jose, Luis, Ana, Maria, Jose, Luis, Ana', 'L')).toHaveLength(2)
    expect(nombresFinder('Juan, Pedro, Maria, Jose, Luis, Ana, Maria, Jose, Luis, Ana', 'A')).toHaveLength(2)
  })
})

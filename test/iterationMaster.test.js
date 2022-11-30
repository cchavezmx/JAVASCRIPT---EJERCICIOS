import { describe, it, expect } from 'vitest'
import interationMaster from '../src/interationMaster'

describe('interationMaster', () => {
  it('should be return [1, 2, 3, 4, 5] for 5', () => {
    expect(interationMaster(5)).toEqual([1, 2, 3, 4, 5])
  })

  it('should be return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for 10', () => {
    expect(interationMaster(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})

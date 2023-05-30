// Escriba una función para encontrar la cadena de prefijo común más larga entre una matriz de cadenas.
// Si no hay prefijo común, devuelva una cadena vacía "".
// Ejemplo 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

import { describe, expect, it } from 'vitest'
import longestCommonPrefix from '../src/longestPrefix.js'

describe('longestCommonPrefix', () => {
  it('should return the longest common prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  })

  it('should return the longest common prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })

  it('should return the longest common prefix', () => {
    expect(longestCommonPrefix(['interstellar', 'interstellar', 'interstellar'])).toBe('interstellar')
  })

  it('should return the longest common prefix', () => {
    expect(longestCommonPrefix(['interstellar', 'interstellar', 'interstellar'])).toBe('interstellar')
  })
})

import { describe, it, expect } from 'vitest'
import isPalindrome from '../src/isPalindrome.js'

describe('isPalindromeFunction', () => {
  it('should return true for x = 121', () => {
    expect(isPalindrome(121)).toEqual(true)
  })
  it('should return false for x = -121', () => {
    expect(isPalindrome(-121)).toEqual(false)
  })
  it('should return false for x = 10', () => {
    expect(isPalindrome(10)).toEqual(false)
  })
  it('should return false for x = -101', () => {
    expect(isPalindrome(-101)).toEqual(false)
  })
})

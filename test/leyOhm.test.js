import { describe, it, expect } from 'vitest'
import leyOhm from '../src/leyOhm.js'

describe('leyOhm', () => {
  it('test voltaje', () => {
    expect(leyOhm({ V: 0, R: 100, I: 10 })).toEqual('El Voltaje es de 1000.00 V')
  })

  it('test resistencia', () => {
    expect(leyOhm({ V: 100, R: 0, I: 10 })).toEqual('La resistencia es de 10.00 Ω')
  })

  it('test amperios', () => {
    expect(leyOhm({ V: 100, R: 100, I: 0 })).toEqual('Los Amperios es de 1.00 A')
  })

  it('test invalid values', () => {
    expect(leyOhm({ V: 100, R: 100, I: 100 })).toEqual('Invalid values')
  })
})


import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, afterEach, expect } from 'vitest'
import Calculator, { operators, numbers } from '../src/Calculator.jsx'

describe('Calculator', () => {
  afterEach(cleanup)

  it('should be reander componente', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText(/Calculator/)
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach(number => screen.getByText(number))
  })

  it('should render 4 rows', () => {
    render(<Calculator />)
    const row = screen.getAllByRole('row')
    expect(row).toHaveLength(4)
  })

  it('should render operation', () => {
    render(<Calculator />)
    operators.forEach(operator => screen.getByText(operator))
  })

  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  it('should user input after clicking a number', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('should user input after clickg several numbers', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    const two = screen.getByText('2')
    const three = screen.getByText('3')

    fireEvent.click(one)
    fireEvent.click(two)
    fireEvent.click(three)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should user input after click numbers and operations', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+2')
  })

  it('should calculate base on user input and show the result', () => {
    render(<Calculator />)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)

    const two = screen.getByText('2')
    fireEvent.click(two)

    const equal = screen.getByText('=')
    fireEvent.click(equal)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('3')
  })
})

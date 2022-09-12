import { evaluate } from 'mathjs'
import { useState } from 'react'

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
export const rows = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['0']
]

export const operators = ['+', '-', '*', '/']
export const equals = '='

const Calculator = () => {
  const [value, setValue] = useState('')
  const handledClick = (op) => setValue(value + op)

  return (
    <div>
      <h1>Calculator</h1>
      <input type='text' value={value} readOnly />
      <div role='grid'>
        {
          rows.map((row, index) => (
            <div role='row' key={index}>
              {row.map(number =>
                <button
                  key={number}
                  onClick={() => handledClick(number)}
                  role='cell'
                >{number}
                </button>)}
            </div>
          ))
        }
        {
          operators.map(operator => (
            <button
              key={operator}
              role='cell'
              onClick={() => handledClick(operator)}
            >
              {operator}
            </button>
          ))
        }
        <button onClick={() => setValue(evaluate(value))} role='cell'>{equals}</button>
      </div>
    </div>
  )
}

export default Calculator

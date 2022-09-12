const fizzbuzz = (num) => {
  if (typeof num !== 'number') {
    throw new Error('Not a number')
  }

  const multiples = { 3: 'fizz', 5: 'buzz' }
  let ouput = ''
  Object
    .entries(multiples)
    .forEach(([multiple, word]) => {
      if (num % multiple === 0) ouput += word
    })

  return ouput === '' ? num : ouput
}

export default fizzbuzz

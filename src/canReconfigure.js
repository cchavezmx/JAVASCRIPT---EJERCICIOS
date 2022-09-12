const canReconfigure = (from, to) => {
  if (typeof from !== 'string') throw new Error('Config must be a string')
  if (typeof to !== 'string') throw new Error('Config must be a string on second parameter')

  const isSameLength = from.length === to.length
  if (!isSameLength) return false

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hasSameUniqueLetters) return false

  const transformation = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]

    const storeLetter = transformation[fromLetter]
    if (storeLetter && storeLetter !== toLetter) return false
    transformation[fromLetter] = toLetter
  }

  return true
}

export default canReconfigure

const numbers = require('./numbers')

const fromUnixTimestamp = (value) => {
  const digits = numbers.toDigits(value)
  if (typeof digits !== 'string' || digits.length === 0) {
    return null
  }
  return new Date(Number(digits) * 1000)
}

module.exports = {
  fromUnixTimestamp,

  fromUnix: fromUnixTimestamp
}

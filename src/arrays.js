const count = (value) => {
  return (typeof value === 'object' && value instanceof Array)
    ? value.length
    : -1
}
const isValid = (value, isEmptyOkay = false) => {
  return (
    (typeof value === 'object') &&
    (value instanceof Array) &&
    (isEmptyOkay || value.length > 0)
  )
}

module.exports = {
  count,
  isValid
}

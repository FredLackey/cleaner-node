const constants = require('./constants')

const EMPTY_GUID = '00000000-0000-0000-0000-000000000000'
const EMPTY_UID = '00000000000000000000000000000000'

const isUuidFormat = value => {
  return (
    typeof value === 'string' &&
    value.length === 32 &&
    value.toLowerCase().split('').filter(x => (constants.strings.ALPHANUMERIC.toLowerCase()).length === 32)
  )
}

module.exports = {
  EMPTY_GUID,
  EMPTY_UID,

  isUuidFormat
}

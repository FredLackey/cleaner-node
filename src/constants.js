const wells = require('know-your-http-well')

const me = {
  strings: {
    ALPHA: 'abcdefghijklmnopqrstuvwxyz',
    DIGITS: '0123456789',
    ALPHANUMERIC: 'abcdefghijklmnopqrstuvwxyz0123456789'
  },
  http: {
    status: {
      codes: wells.statusPhrasesToCodes,
      phrases: wells.statusPhrasesToCodes
    }
  }
}

module.exports = me

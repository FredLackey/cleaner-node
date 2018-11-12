const wells = require('know-your-http-well');

const me = {
  strings: {
    ALPHA: 'abcdefghijklmnopqrstuvwxyz',
    DIGITS: '0123456789',
    ALPHANUMERIC: 'abcdefghijklmnopqrstuvwxyz0123456789'
  },
  statusCodes: wells.statusPhrasesToCodes
};

module.exports = me;
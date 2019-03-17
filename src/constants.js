const wells = require('know-your-http-well');

const me = {
  strings: {
    ALPHA       : 'abcdefghijklmnopqrstuvwxyz',
    DIGITS      : '0123456789',
    ALPHANUMERIC: 'abcdefghijklmnopqrstuvwxyz0123456789',
    CLEAR_CODE  : 'ACDEFGHJKLMNPRTVWXY0123456789',
    BRACKETS  : [
      { open: '<', close: '/>' },
      { open: '<', close: '>' },
      { open: '[', close: ']' },
      { open: '{', close: '}' },
      { open: '(', close: ')' },
      { open: '%', close: '%' },
      { open: '_', close: '_' }
    ]
  },
  http: {
    status: {
      codes: wells.statusPhrasesToCodes,
      phrases: wells.statusPhrasesToCodes
    }
  }
};

module.exports = me;

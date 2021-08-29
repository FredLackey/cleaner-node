const wells = require('know-your-http-well');

const me = {
  strings: {
    ALPHA       : 'abcdefghijklmnopqrstuvwxyz',
    ALPHANUMERIC: 'abcdefghijklmnopqrstuvwxyz0123456789',
    BRACKETS  : [
      { open: '<', close: '/>' },
      { open: '<', close: '>' },
      { open: '[', close: ']' },
      { open: '{', close: '}' },
      { open: '(', close: ')' },
      { open: '%', close: '%' },
      { open: '_', close: '_' }
    ],
    CLEAR_CODE  : 'ACDEFGHJKLMNPRTVWXY0123456789',
    DIGITS      : '0123456789',
    ENUM_NAME   : 'ACDEFGHJKLMNPRTVWXY0123456789_'
  },
  durations: {
    YEAR        : 'years',
    QUARTER     : 'quarters',
    MONTH       : 'months',
    WEEK        : 'weeks',
    DAY         : 'days',
    HOUR        : 'hours',
    MINUTE      : 'minutes',
    SECOND      : 'seconds',
    MILLISECOND : 'milliseconds',

    YEARS        : 'years',
    QUARTERS     : 'quarters',
    MONTHS       : 'months',
    WEEKS        : 'weeks',
    DAYS         : 'days',
    HOURS        : 'hours',
    MINUTES      : 'minutes',
    SECONDS      : 'seconds',
    MILLISECONDS : 'milliseconds',
  },
  http: {
    status: {
      codes: wells.statusPhrasesToCodes,
      phrases: wells.statusPhrasesToCodes
    }
  },
  regex: {
    ALPHANUMERIC_DELIMITED: '^[a-zA-Z\\d-_]+$',
    ENUM_NAMES: '^[a-zA-Z\\d_]+$'
  }
};

// Accounting for common typos
me.strings.ENUM_NAMES = me.strings.ENUM_NAME; 

module.exports = me;

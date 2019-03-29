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
  }
};

module.exports = me;

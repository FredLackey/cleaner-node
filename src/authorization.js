const levels = {
  NONE: { value: 0, name: 'None' },
  GUEST: { value: 10, name: 'Guest' },
  USER: { value: 20, name: 'User' },
  ADMIN: { value: 30, name: 'Admin' },
  OWNER: { value: 40, name: 'Owner' },
  SYSTEM: { value: 50, name: 'System' }
};

const ops = [
  { key: 'LESS_THAN', alt: 'LT', text: '<' },
  { key: 'GREATER_THAN', alt: 'GT', text: '>' },
  { key: 'LESS_THAN_OR_EQUALS', alt: 'LTE', text: '<=' },
  { key: 'GREATER_THAN_OR_EQUALS', alt: 'GTE', text: '>=' },
  { key: 'EQUALS', alt: 'EQ', text: '>=' },
];

const rules = {};

Object.keys(levels).forEach(levelKey => {
  const level = levels[levelKey];
  ops.forEach(op => {
    rules[`${op.key}_${levelKey}`] = [op.text, level.value].join(' ');
    rules[`${op.alt}_${levelKey}`] = [op.text, level.value].join(' ');
  });
});

module.exports = {
  levels,
  ops,
  rules
};

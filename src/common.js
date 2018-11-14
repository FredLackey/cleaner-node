const returnValue = (valueOrValues, values) => {
  if (typeof valueOrValues === 'object' && valueOrValues instanceof Array) {
    return values;
  } else {
    return (values.length > 0) ? values[0] : undefined;
  }
};

module.exports = {
  returnValue
};
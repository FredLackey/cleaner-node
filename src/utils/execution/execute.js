const executePromise = require('./execute-promise');

const execute = async command => {
  let result;
  try {
    result = await executePromise(command);
  } catch (error) {
    result = { error };
  }
  return result;
};

module.exports = execute;
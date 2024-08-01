const executePromise = require('./execute-promise');

const execute = async command => {
  try {
    const output = await executePromise(command);
    return {
      success: true,
      output
    }
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};

module.exports = execute;
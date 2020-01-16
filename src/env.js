const NODE_ENV = `${process.env.NODE_ENV}`.trim() || 'development';
const NODE_DEBUG = `${process.env.NODE_DEBUG}`.trim() || 'false';
const IS_DEV = NODE_ENV.trim().toUpperCase().startsWith('DEV');
const IS_DEBUG = NODE_DEBUG.trim().toUpperCase() === 'TRUE';

module.exports = {
  NODE_ENV,
  NODE_DEBUG,
  IS_DEV,
  IS_DEBUG
};
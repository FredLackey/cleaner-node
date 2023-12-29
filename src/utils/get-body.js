// const express = require('./express');
const nextjs  = require('./nextjs');

const getBody = async (req) => {
  if (!req) {
    console.error('Invalid req object for getBody.');
    return {};
  }
  if (req.body) {
    return req.body;
  }
  const body = nextjs.getBody(req);
  return body;
};

module.exports = getBody;

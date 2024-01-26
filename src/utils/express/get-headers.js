const getHeaders = request => {
  try {
    const headers = request.getHeaders();
    return {
      ...headers
    };
  } catch (error) {
    console.debug('express/get-headers.js', { error });
    return undefined;
  }
};

module.exports = getHeaders;

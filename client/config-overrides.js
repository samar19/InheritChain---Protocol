const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add your custom webpack configuration here
  // For example, to include a polyfill for the 'https' module:
  config.resolve.fallback = {
    https: false,
    http: false,
    zlib: false
  };

  // Return the modified config
  return config;
};

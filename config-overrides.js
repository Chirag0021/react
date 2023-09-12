const path = require('path');

module.exports = function override(config, env) {
  // Add fallbacks for stream-browserify and path-browserify
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
    path: require.resolve('path-browserify'),
  };

  // Other modifications to the webpack config can be added here

  return config;
};

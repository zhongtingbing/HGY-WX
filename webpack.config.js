import path from 'path'
const cwd = process.cwd();
module.exports = function(config, env) {
  if (env === 'production') {
    config.entry = {
      index: ['babel-polyfill', './src/index.js'],
      common: ['react', 'react-dom']
    };
  }

  config.resolve.alias = {
    ...config.resolve.alias,
    ...{
      // 'mb-utils': path.resolve(cwd, 'src/utils'),
      'components': path.resolve(cwd, 'src/components'),
    }
  }

  return config;
};

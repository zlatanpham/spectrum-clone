const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['types'] = path.join(__dirname, 'types');

    return config;
  },
});

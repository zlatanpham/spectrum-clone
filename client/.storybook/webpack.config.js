const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  });

  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: 'postcss-loader',
        options: {
          plugins: [require('tailwindcss')('tailwind.js')],
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./'),
  ];

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');

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

  return config;
};

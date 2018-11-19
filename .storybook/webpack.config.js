const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = (baseConfig, env, config) => {

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    resolve: {
      plugins: [
          new TsConfigPathsPlugin({ configFileName: '../tsconfig.json' })
      ],
    }
  });

  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

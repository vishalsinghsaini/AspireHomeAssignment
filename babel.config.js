module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@constants': './src/assets/constants',
          '@images': './src/assets/images',
          '@components': './src/components',
          '@screens': './src/screens',
          '@stacks': './src/stacks',
          '@shimmer-loader': './src/shimmer-loader',
          '@config': './src/config',
          '@utils': './src/utils',
          '@network': './src/network',
          '@app-hooks': './src/app-hooks',
          '@store': './src/store',
          '@native-modules': './src/native-modules',
          '@analytics': './src/analytics',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

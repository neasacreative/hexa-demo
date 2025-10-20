module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }, 'ant-design-vue']
  ],
};

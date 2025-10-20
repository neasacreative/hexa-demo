import { theme } from './src/config/theme/themeVariables';
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_SUB_ROUTE
        ? process.env.VUE_APP_SUB_ROUTE
        : process.env.BASE_URL
      : process.env.BASE_URL,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            ...theme,
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        if (!options.compilerOptions) {
          options.compilerOptions = {};
        }
        options.compilerOptions.pragma = 'h';
        return options;
      });
  },
};

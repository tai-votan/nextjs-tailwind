const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withPurgeCss = require('next-purgecss');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(
  withSass({
    cssModules: true,
    ...withLess(
      withPurgeCss({
        // lessLoaderOptions: {
        //   javascriptEnabled: true,
        //   // modifyVars: themeVariables // make your antd custom effective
        // },
        i18n: {
          locales: ['vi', 'en'],
          defaultLocale: 'vi',
          localeDetection: false
        }
        // webpack: (config, { isServer }) => {
        //   if (isServer) {
        //     const origExternals = [...config.externals];
        //     // eslint-disable-next-line no-param-reassign
        //     config.externals = [
        //       // eslint-disable-next-line consistent-return
        //       (context, request, callback) => {
        //         if (typeof origExternals[0] === 'function') {
        //           origExternals[0](context, request, callback);
        //         } else {
        //           callback();
        //         }
        //       },
        //       ...(typeof origExternals[0] === 'function' ? [] : origExternals)
        //     ];
        //
        //     config.module.rules.unshift({
        //       use: 'null-loader'
        //     });
        //   }
        //
        //   config.plugins.push(
        //     new FilterWarningsPlugin({
        //       exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
        //     })
        //   );
        //
        //   config.resolve.modules.push(__dirname);
        //
        //   return config;
        // }
      })
    )
  })
);

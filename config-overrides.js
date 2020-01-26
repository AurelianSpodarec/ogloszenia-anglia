// Got it from here: https://www.npmjs.com/package/react-app-rewire-aliases

const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@context': path.resolve(__dirname, `${paths.appSrc}/context/`),
    '@hooks': path.resolve(__dirname, `${paths.appSrc}/hooks/`),
    '@services': path.resolve(__dirname, `${paths.appSrc}/services/`),
    '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
    '@views': path.resolve(__dirname, `${paths.appSrc}/services/`)
  })(config, env);
  return config;
}
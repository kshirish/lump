const sharedConfig = require('@lump/tailwind-config/tailwind.config.js');

module.exports = {
  ...sharedConfig,
  prefix: 'ui-',
  content: ['src/**/*.{js,jsx}', '../../packages/**/*.{js,jsx}'],
};

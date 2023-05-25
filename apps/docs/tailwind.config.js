const sharedConfig = require('@lump/tailwind-config/tailwind.config.js');

module.exports = {
  ...sharedConfig,
  content: ['src/**/*.{js,jsx}'],
};

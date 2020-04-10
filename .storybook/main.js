module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    // presets
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs/preset',
    // plugins
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
  ],
};

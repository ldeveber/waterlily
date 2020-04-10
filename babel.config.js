module.exports = function(api) {
  api.cache(true); // makes jest not blow upp

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          loose: true,
          targets: 'last 2 versions, > 0.5%, not dead'
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        }
      ]
    ],
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
            }
          ],
        ],
        plugins: ['@babel/transform-modules-commonjs']
      }
    }
  };
};

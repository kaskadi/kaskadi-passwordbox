module.exports = config => {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [{
      pattern: 'test/**/*.test.js',
      type: 'module'
    },
    {
      pattern: '**/*.js',
      included: false,
      type: 'module'
    },
    {
      pattern: 'import-font.css',
      watched: false,
      included: false,
      served: true,
      nocache: false
    },
    {
      pattern: 'pwd-font.ttf',
      watched: false,
      included: false,
      served: true,
      nocache: false
    }],
    preprocessors: { '*.js': 'coverage' },
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'text' }, { type: 'lcovonly', subdir: './' }, { type: 'html', subdir: './html' }],
      instrumenterOptions: {
        istanbul: { esModules: true }
      }
    },
    reporters: ['progress', 'coverage'],
    port: 9876, // karma web server port
    colors: true,
    browsers: ['ChromeHeadless', 'FirefoxHeadless', 'Edge'],
    autoWatch: false,
    esm: {
      nodeResolve: true
    },
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  })
  return config
}

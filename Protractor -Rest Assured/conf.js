exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnet: true,
    /* capabilities: {
      'browserName': 'chrome'
      }, */
    framework: 'jasmine',
    specs: ['TestDemo.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };
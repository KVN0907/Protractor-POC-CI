// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    allScriptsTimeout: 60000,
    specs: [
        './tests-e2e/specs/searchFlight.ts',
    ],
    /* multiCapabilities: [{
        'browserName': 'chrome'
      }, {
        'browserName': 'firefox'
      }], */
     capabilities: {
        'browserName': 'firefox',
        //'moz:firefoxOptions': {
           /*  args: [
                '-headless'
            ] */
        //},
        log: {
            level: 'trace'
        }
        
         /* chromeOptions: {
            prefs: {
                download: {

                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': process.cwd() + './tests-e2e/download',
                    default_content_settings: {
                        'popups': 0
                    }

                }
            },
            args: [
                "--headless",
                "--disable-gpu",
                "--window-size=1920,1080",
                "--no-sandbox",
                "--disable-dev-shm-usage"
            ],
            

        }  */
    }, 
    directConnect: true,
    baseUrl: '',
    awsUrl: '',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    },

    params: {
        environment: null
    },
    onPrepare() {
        browser.ignoreSynchronization = false;
		browser.params.TIMEOUT_INTERVAL = 360000;
        require('ts-node').register({
            project: 'tests-e2e/tsconfig.e2e.json'
        });

        jasmine.getEnv().addReporter(new HtmlReporter({
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'Screenshot',
            jsonsSubfolder: 'Json',
            baseDirectory: './reports',
            gatherBrowserLogs: false,
            docTitle: 'Protractor_POC',
                      
        }).getJasmine2Reporter());
    },

};

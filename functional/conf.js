// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    allScriptsTimeout: 60000,
    specs: [
       './tests-e2e/specs/searchFlight.ts',
       '..tests-e2e/specs/searchBus.ts'
    ],
   
     capabilities: {
        'browserName': 'firefox',
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
            preserveDirectory: true,
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'Screenshot',
            jsonsSubfolder: 'Json',
            baseDirectory: './reports',
            gatherBrowserLogs: false,
            docTitle: 'QAOPS_POC',
                      
        }).getJasmine2Reporter());
    },

};

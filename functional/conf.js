// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 60000,
    specs: [
        './tests-e2e/specs/*.ts',
    ],
  
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
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
             

        }
    },
    directConnect: true,
    framework: 'jasmine',
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
        require('jasmine2-protractor-utils');
        require('ts-node').register({
            project: 'tests-e2e/tsconfig.e2e.json'
        });
        let env = jasmine.getEnv();
        browser.params.TIMEOUT_INTERVAL = 360000; // global interval timeout used in spec files
        env.addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayFailuresSummary: true,
                displaySuccessesSummary: true,
                displayPendingSummary: true,
                displaySuccessfulSpec: true,
                displayFailedSpec: true,
                displayPendingSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true
            }
        }));
        global.browser.getProcessedConfig().then(function (config) {
        });

        let specs = [];
        let orgSpecFilter = jasmine.getEnv().specFilter;
        jasmine.getEnv().specFilter = function (spec) {
            specs.push(spec);
            return orgSpecFilter(spec);
        };
        jasmine.getEnv().addReporter(new function () {
            this.specDone = function (result) {
                if (result.failedExpectations.length > 0) {
                    specs.forEach(function (spec) {
                        spec.disable()
                    });
                }
            };
        });


    },
    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: false,
        disableScreenshot: false,
        screenshotPath: './reports/screenshots',
        screenshotOnExpectFailure: true,
        screenshotOnSpecFailure: true,
        clearFoldersBeforeTest: true,
        htmlReportDir: './reports/htmlReports'
    }]
};

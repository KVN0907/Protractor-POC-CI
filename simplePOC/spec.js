"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('https://google.com'); // Entering application url in browser
        protractor_1.element(protractor_1.by.xpath("//input[@name='q']")).sendKeys("Protracotr");
        var EC = protractor_1.ExpectedConditions;
        var sel = protractor_1.element(protractor_1.by.css(".suggestions-inner-container"));
        protractor_1.browser.wait(EC.visibilityOf(sel), 5000);
        var select = protractor_1.element(protractor_1.by.cssContainingText(".suggestions-inner-container", "protractor api"));
        select.click();
    });
});

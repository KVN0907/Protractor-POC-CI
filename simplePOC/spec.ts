import { ElementFinder, browser, by, element, ExpectedConditions } from 'protractor';


describe('angularjs homepage todo list', function () { //Suite in Jasmine
  it('should add a todo', function () { // Test in Jasmine
    browser.ignoreSynchronization=true;
    browser.get('https://google.com'); // Entering application url in browser
   
    element(by.xpath("//input[@name='q']")).sendKeys("Protracotr");
    let EC = ExpectedConditions;
    let sel = element(by.css(".suggestions-inner-container"));
    browser.wait(EC.visibilityOf(sel),5000)
    var select = element(by.cssContainingText(".suggestions-inner-container","protractor api"));
    select.click();

    
  });
});
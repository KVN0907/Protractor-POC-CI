import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';

export class selectFlight {

    private refundableWE : ElementFinder;
    private nonStopWE : ElementFinder;
    private felxFirstRadioWE : ElementFinder;
    private continueWE : ElementFinder;
    private EC = ExpectedConditions;

    constructor() {

        this.refundableWE=element(by.buttonText("Refundable"));
        this.nonStopWE = element(by.xpath("//label[contains(text(),'Nonstop flights')]"));
        this.felxFirstRadioWE = element(by.css("tr.rowOdd.rowFirst td.colCost.colCost6.colCost_CR:nth-child(8) > div:nth-child(1)"));
        this.continueWE = element(by.buttonText("Continue"));
    }

    async selectFlight(){

        browser.sleep(7000);
        await browser.wait(this.EC.visibilityOf(this.refundableWE),10000);
        await this.refundableWE.click(); 
        await this.nonStopWE.click();
        await browser.wait(this.EC.visibilityOf(this.felxFirstRadioWE),5000);
        this.felxFirstRadioWE.click();
        await this.continueWE.click();
        console.log("Flight Selected");


    }
}
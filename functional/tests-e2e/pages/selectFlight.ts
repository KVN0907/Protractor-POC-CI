import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';

export class selectFlight {

    private refundableWE : ElementFinder;
    private nonStopWE : ElementFinder;
    private felxFirstRadioWE : ElementFinder;
    private continueWE : ElementFinder;
    private EC = ExpectedConditions;

    constructor() {

        this.refundableWE=element(by.buttonText("Search flights"));
        this.nonStopWE = element(by.xpath("//label[contains(text(),'Nonstop flights')]"));
        this.felxFirstRadioWE = element(by.css("tr.rowOdd.rowFirst td.colCost.colCost6.colCost_CR:nth-child(8) > div:nth-child(1)"));
        this.continueWE = element(by.buttonText("Continue"));
    }


}
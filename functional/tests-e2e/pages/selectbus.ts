import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';


export class selectBus {

    private fromWE : ElementFinder;
    private toWE : ElementFinder;
    private dateWE : ElementFinder;
    private calenderWE : ElementFinder;
    private searchWE : ElementFinder;
    private EC = ExpectedConditions;

    constructor() {

        this.fromWE=element(by.css("form>div:nth-child(1)>div>ng-select>div:nth-child(1)>div>div>input"));
        this.toWE = element(by.css("form>div:nth-child(2)>div>ng-select>div:nth-child(1)>div>div>input"));
        this.dateWE = element(by.css("table.days.weeks tbody:nth-child(2) tr:nth-child(5) td:nth-child(6)"));
        this.calenderWE = element(by.css(".spright8:nth-child(3)>div>input"));
        this.searchWE = element(by.buttonText("Search"));
        
    }

    async selectFlight(from,to){

        browser.sleep(7000);
        await browser.wait(this.EC.visibilityOf(this.fromWE),10000);
        await this.fromWE.click();
        await this.fromWE.sendKeys(from)
        await browser.wait(this.EC.visibilityOf(this.toWE),10000);
        await this.toWE.click();
        await this.toWE.sendKeys(to);
        await this.calenderWE.click();
        await this.dateWE.click();
        await this.searchWE.click();
    }
}
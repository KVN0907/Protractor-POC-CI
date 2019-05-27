import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';


export class selectBus {

    private fromWE : ElementFinder;
    private toWE : ElementFinder;
    private dateWE : ElementFinder;
    private calenderWE : ElementFinder;
    private from1st: ElementFinder
    private searchWE : ElementFinder;
    private showWE: ElementFinder;
    private EC = ExpectedConditions;

    constructor() {

        this.fromWE=element(by.css("form>div:nth-child(1)>div>ng-select>div:nth-child(1)>div>div>input"));
        this.from1st = element(by.css("div.ng-option:nth-child(1)"));
        this.toWE = element(by.css("form>div:nth-child(2)>div>ng-select>div:nth-child(1)>div>div>input"));
        this.dateWE = element(by.css("table.days.weeks tbody:nth-child(2) tr:nth-child(5) td:nth-child(6)"));
        this.calenderWE = element(by.css(".spright8:nth-child(3)>div>input"));
        this.searchWE = element(by.buttonText("Search"));
        this.showWE = element(by.css("div.row:nth-child(1) > div.col-md-10"));
        
    }

    async selectFlight(from,to){

        browser.sleep(7000);
        await browser.wait(this.EC.visibilityOf(this.fromWE),10000);
        await this.fromWE.click();
        await this.fromWE.sendKeys(from)
        await browser.wait(this.EC.visibilityOf(this.from1st),10000);
        await this.from1st.click();
        await browser.wait(this.EC.visibilityOf(this.toWE),10000);
        await this.toWE.click();
        await this.toWE.sendKeys(to);
        await this.from1st.click();
        await this.calenderWE.click();
        await this.dateWE.click();
        await this.searchWE.click();
        await browser.wait(this.EC.visibilityOf(this.showWE),5000);
        expect(await this.showWE.getText()).toContain("Show")
    }
}
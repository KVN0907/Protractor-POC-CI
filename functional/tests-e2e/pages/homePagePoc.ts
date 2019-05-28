import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions, ProtractorExpectedConditions} from 'protractor';

export class homePagePoc {

    private busTicketsWE: ElementFinder;
    private loginWE: ElementFinder;
    private EC = ExpectedConditions;

    constructor(){
        
        this.busTicketsWE = element(by.css("a.noblur:nth-child(3)>span"));
        this.loginWE = element(by.linkText("Login"))
    }

    async bookTicket(){

       // await browser.wait(this.EC.visibilityOf(this.loginWE),5000)
        await this.busTicketsWE.click();
    }
}


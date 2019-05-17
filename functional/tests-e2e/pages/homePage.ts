import {browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions} from 'protractor';

export class homePage {

    private fromPlaceWE : ElementFinder;
    private toDesttinationWE : ElementFinder;
    private searchButtonWE : ElementFinder;
    private oneWayWE : ElementFinder;
    private departDateWE: ElementFinder;
    private returnDateWE: ElementFinder;
    private travellerWE: ElementFinder;
    private travellerDropDownWE: ElementFinder;
    private childWE: ElementFinder; 
    private searchButton: ElementFinder;
    private EC = ExpectedConditions;

    constructor() {

        this.fromPlaceWE = element(by.xpath(".//input[@placeholder='Where from?']"));
        this.toDesttinationWE= element(by.xpath(".//input[@placeholder='Where to?']"));
        this.departDateWE= element(by.css(".avenir.bn.pv2.date-fields"));
        this.oneWayWE = element(by.css("#jb-radio-1"));
        this.searchButtonWE= element(by.css("body.ng-tns-0-1:nth-child(2) jb-basic-template.ng-star-inserted:nth-child(3) div.w-100 jb-section-header-container.ng-star-inserted div.jb-section-header.ng-star-inserted div.list-of-sections.ng-star-inserted:nth-child(1) div.center.page-margin div.center.mb0.ng-star-inserted div.w-100 jb-book-trip-container.ng-star-inserted jb-pattern-block.ng-star-inserted:nth-child(1) div.booker-container.bg-core-blue.relative.negative-page-margin div.center.pa3.pt7-ns.ph5-m.pa7-ns.pb-5-m.pb7.relative.ph0-l.ph0-m.ph2-ns.page-margin-m.page-margin-l div.flex.flex-column.jb-max-width.center jb-booker-tabs-container.jb-grid.one-up.grid-offset-l jb-tabs.db.w-100.tc-ns.bg-core-blue.white section.tab-window.tl div.ng-star-inserted:nth-child(1) jb-tab-panel.db.flex-none.top-0 jb-booker-tabs-wrapper.db.pv3.black.ng-star-inserted jb-booker-air-wrapper.ng-star-inserted div.flex.flex-column div.db.tc.db-ns:nth-child(3) jb-booker-air-submit:nth-child(1) > button.dib.pointer.avenir.copy-s.b.b--none.white.no-underline.lh-3.tc.nowrap.t-med-bg.w-100.w-max-ns.w-auto-ns.min-w-button.hover-white.jb-button-secondary.bg-orange.br-rounded-2:nth-child(2)"));
        this.searchButtonWE=element(by.buttonText("Search flights"));
        this.travellerDropDownWE= element(by.css("button.b--light-gray.traveler-options"));
        this.childWE = element(by.xpath("//li[2]//jb-stepper[1]//div[1]//button[2]"));

    }

    async searchFlight(from, to){
        await this.oneWayWE.click();
        await this.fromPlaceWE.clear();
        await this.toDesttinationWE.clear();
        await this.fromPlaceWE.sendKeys(from);
        await this.toDesttinationWE.sendKeys(to);
        //const d: Date = new Date().toDateString();
        await this.departDateWE.sendKeys("05/16/2019");
        await this.travellerDropDownWE.click();
        for(let i=1;i<=2;i++)
        {
        await this.childWE.click();
        }
        await this.travellerDropDownWE.click();
        await browser.wait(this.EC.elementToBeClickable(this.searchButtonWE),10000)
        this.searchButtonWE.click();

    }
    
}
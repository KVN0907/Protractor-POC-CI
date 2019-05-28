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
    private bookWE: ElementFinder;
    private flightsWE: ElementFinder;
    private firstOptionWE: ElementFinder;
    private dateWE: ElementFinder;
    private seeFlightsWE: ElementFinder;
    private EC = ExpectedConditions;

    constructor() {

        this.fromPlaceWE = element(by.xpath(".//input[@placeholder='Where from?']"));
        this.toDesttinationWE= element(by.xpath(".//input[@placeholder='Where to?']"));
        this.departDateWE= element(by.css(".avenir.bn.pv2.date-fields"));
        this.oneWayWE = element(by.css("#jb-radio-1"));
        this.searchButtonWE=element(by.buttonText("Search flights"));
        //this.searchButtonWE=element(by.xpath("//form[@action='https://book.jetblue.com/B6/webqtrip.html']/following-sibling::button")) ;
        this.travellerDropDownWE= element(by.css("button.b--light-gray.traveler-options"));
        this.childWE = element(by.xpath("//li[2]//jb-stepper[1]//div[1]//button[2]"));
        this.bookWE= element(by.linkText("Book"));
        this.flightsWE= element(by.css("li.flex-ns.justify-center-ns.pb2.fl.w-100.w-third-ns.pa2-ns.ng-star-inserted:nth-child(1) jb-bubble-link.tr-ns a.bubble-link.dib.no-underline.center-ns.tc-ns.w-100.w-auto-ns.royal-blue.smaller-bubble span.dib.fill-royal-blue.db-ns.f4.f3-ns.lh-title.lh-copy-ns.display-copy-typeface.v-mid > span:nth-child(1)"));
        this.firstOptionWE = element(by.css("#seoDeal1"));
        this.dateWE = element(by.css("tr.flex:nth-child(2)>td.relative.date-box:nth-child(2)"));
        this.seeFlightsWE = element(by.css("button.see-flights-btn"));

    }

    async searchFlight(from, to){
        await this.oneWayWE.click();
        await this.fromPlaceWE.clear();
        await this.toDesttinationWE.clear();
        await this.fromPlaceWE.sendKeys(from);
        await this.toDesttinationWE.sendKeys(to);
        //const d: Date = new Date().toDateString();
        await this.departDateWE.sendKeys("06/18/2019");
        await this.travellerDropDownWE.click();
        for(let i=1;i<=2;i++)
        {
        await this.childWE.click();
        }
        await this.travellerDropDownWE.click();
       /*  await browser.wait(this.EC.elementToBeClickable(this.searchButtonWE),10000)
        browser.navigate().to("https://book.jetblue.com/B6/webqtrip.html");
        await this.searchButtonWE.click().then();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.sleep(5000);
 */
        await this.searchButtonWE.click();
    }

    async bookFlight(){
        await this.bookWE.click();
        await browser.wait(this.EC.visibilityOf(this.flightsWE),5000);
        this.flightsWE.click();
        await browser.wait(this.EC.visibilityOf(this.firstOptionWE),5000);
        this.firstOptionWE.click();
        await browser.wait(this.EC.visibilityOf(this.dateWE),5000);
        this.dateWE.click();
        await this.seeFlightsWE.click().then(function (){
            return this;
        });
        browser.manage().timeouts().implicitlyWait(5000);


    }
    
}
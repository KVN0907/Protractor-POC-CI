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
      //  this.searchButtonWE=element(by.buttonText("Search flights"));
        this.searchButtonWE=element(by.xpath("//form[@action='https://book.jetblue.com/B6/webqtrip.html']/following-sibling::button")) ;
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
        await this.departDateWE.sendKeys("05/18/2019");
        await this.travellerDropDownWE.click();
        for(let i=1;i<=2;i++)
        {
        await this.childWE.click();
        }
        await this.travellerDropDownWE.click();
       /*  await browser.wait(this.EC.elementToBeClickable(this.searchButtonWE),10000)
        browser.navigate().to("https://book.jetblue.com/B6/webqtrip.html");
        //await this.searchButtonWE.click().then();
        browser.manage().timeouts().implicitlyWait(5000);
        browser.sleep(5000);
 */
    }
    
}
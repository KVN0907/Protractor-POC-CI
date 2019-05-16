import { testData } from "../data/testData";
import { homePage } from "../pages/homePage";
import { browser } from "protractor";

describe ( 'To search for flights', () => {
    
    let tdata :testData;
    let homePagePO : homePage;

    beforeAll(async () => {
        tdata = new testData();
        homePagePO = new homePage();
        browser.driver.manage().window().maximize();
        browser.get(tdata.url.appUrl)
         });

    beforeEach(async () => {
             
            jasmine.DEFAULT_TIMEOUT_INTERVAL = browser.params.TIMEOUT_INTERVAL;
    });

    afterAll(async () => {
      browser.quit();
    }); 

it ( 'Should search with given data', async () =>{

        homePagePO.searchFlight(tdata.flightDetails.from,tdata.flightDetails.to);


});


});

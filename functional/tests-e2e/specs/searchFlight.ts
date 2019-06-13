import { testData } from "../data/testData";
import { homePage } from "../pages/homePage";
import { browser } from "protractor";
import { selectFlight } from "../pages/selectFlight";


describe ( 'To search for flights', () => {
    
    let tdata :testData;
    let homePagePO : homePage;
    let selectFlightPO : selectFlight;

    beforeAll(async () => {
        tdata = new testData();
        homePagePO = new homePage();
        selectFlightPO = new selectFlight();
        browser.driver.manage().window().maximize();
        browser.get(tdata.url.appUrl)
         });

    beforeEach(async () => {
             
            jasmine.DEFAULT_TIMEOUT_INTERVAL = browser.params.TIMEOUT_INTERVAL;
    });

    afterAll(async () => {
     setTimeout(function() {
       browser.quit()
     },100)
    }); 

it ( 'Should search with given data', async () =>{

       homePagePO.searchFlight(tdata.flightDetails.from,tdata.flightDetails.to);
       selectFlightPO.selectFlight();
    


});


});

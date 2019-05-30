import { testDataPoc } from "../data/testDataPoc";
import { homePagePoc } from "../pages/homePagePoc";
import { browser } from "protractor";
import { selectBus } from "../pages/selectbus";


describe ( 'To search for flights', () => {
    
    let tdata :testDataPoc;
    let homePagePO : homePagePoc;
    let selectFlightPO : selectBus;

    beforeAll(async () => {
        tdata = new testDataPoc();
        homePagePO = new homePagePoc();
        selectFlightPO = new selectBus();
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

       // homePagePO.searchFlight(tdata.flightDetails.from,tdata.flightDetails.to);
        homePagePO.bookTicket();
        selectFlightPO.selectFlight(tdata.travelDetails.from,tdata.travelDetails.to);


});


});

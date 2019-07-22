var Request = require("request");
var rp = require("request-promise");
describe("Errors in Protractor",function(){
 // browser.ignoreSynchronization = true; // for non-angular websites
  it("Error handleing in protractor",function(done){
Request.headers={"content-type": "application/json" }
//Request.url="https://jsonplaceholder.typicode.com/";
    Request.get({
      "url":"https://jsonplaceholder.typicode.com/",
    "path": "users/1"

      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir("Body : ******");
        console.dir(JSON.parse(body));

        console.log("\n\n\nResponse Code ****:"+response.statusCode)
		expect(response.statusCode).toBe(200)
 
        done();
    });
  });
});
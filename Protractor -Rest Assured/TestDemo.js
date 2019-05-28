//var Request = require("request");
var rp = require("request-promise-native")
var myRequest={
    uri:"https://jsonplaceholder.typicode.com/users/1",
headers:{ "content-type": "application/json"},
method:"get"
}
describe("Errors in Protractor",function(){
 // browser.ignoreSynchronization = true; // for non-angular websites
  it("Error handleing in protractor",function(done){
//Request.headers={"content-type": "application/json" }
//Request.url="https://jsonplaceholder.typicode.com/";
rp(myRequest).then((users)=>{
    
    console.log(users)
}).catch((err)=> {
    console.log(err)
})
    
 .finally( ()=> {
    
done()
    // This is called after the request finishes either successful or not successful.
});


  });
});
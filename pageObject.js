var pageDriver=require('./date.js');


describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://map-test.maxxton.net/home/');
    //date.js
    pageDriver.clickNthElementByCSS('[type="sit"]',0);
    browser.sleep(5000);
     
  });
});
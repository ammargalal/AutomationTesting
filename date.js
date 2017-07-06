var numberOfRepeat = 15;
var date = {
		
	clickNth: function(by, index, i){
        if(!i){
            i=1;
        }
        try {
            element.all(by).get(index).click().then(function(){
                console.log("Successfully clicked: "+ by);

            }, function(err) {
                page = require("./date.js");
                console.log("Retrying...");
                console.log("click "+ by);
                if(i<numberOfRepeat){
                    i = i+1;
                    browser.sleep(500*i);
                    page.clickNth(by, index, i);
                }else{
                    browser.getCurrentUrl().then(function(url){
                        console.log("Failed after "+i+" attempts waited for "+ i*500 +" milisecconds for element " + by + " ended on page " +url);

                        //Last try will fail the test:
                        element.all(by).get(index).click();
                    });
                }
            });
        }
        catch(err) {
            console.log('error occured');
        }
    },
    clickNthElementByCSS: function(cssValue, index) {
        this.clickNth(by.css(cssValue), index);
    },
}

module.exports=date;
/*
var getTomorrowDate = function(){

        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        if(day<10) {
            day='0'+day
        }
        if(month<10) {
            month='0'+month
        }
        return tomorrow= month +"/"+day;
        console.log(getTomorrowDate+"gh")
        
}
getTomorrowDate();*/

var generateRandomNumber= function(length, boolean) {
	 
    if(boolean){
    	 
        possibleChars = "0123";
        
    }else{
        possibleChars = "0123456789";
    }
    var randomString = "";
    for(i = 0; i< length; i++){
    	
        randomString += possibleChars.charAt(Math.floor(Math.random()*possibleChars.length));
    	console.log(randomString)
    }
    return randomString;
 
    console.log("fsd"+randomString);
    
}

generateRandomNumber(5,true)
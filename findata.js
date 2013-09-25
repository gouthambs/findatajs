
var yql  = require('yql');


function YahooFinData(){
	 
}


var findata = new YahooFinData();



// testing the example for yql query
new yql.exec("SELECT location,item FROM weather.forecast  WHERE (location = @zip)", function(response) {
    var location = response.query.results.channel.location,
    condition	 = response.query.results.channel.item.condition;
    console.log("The current weather in "+ location.city + ","+ location.region + " is " +
    		condition.temp + " degrees and "+ condition.text);
}, {"zip": 90703}); 
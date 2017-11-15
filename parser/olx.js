const request = require('request');
request.post("https://www.olx.pl/ajax/search/list/", {},function(error, response, body){
    console.log(body);
});
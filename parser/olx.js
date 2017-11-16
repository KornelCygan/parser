// const request = require('request');
// request.post("https://www.olx.pl/ajax/search/list/", {},function(error, response, body){
//     console.log(body);
// });

const htmlToJson = require('html-to-json');


let promise = htmlToJson.request('https://www.olx.pl/nieruchomosci/mieszkania/sprzedaz/', {
    'condosLinks': ['a.marginright5.link.detailsLink', function ($a) {
        // console.log($a.attr('href'));
        return $a.attr('href');
    }],

}, function (err, result) {
    // console.log(result);
    result.condosLinks.map( link => getOfferDetails(link));
});


function getOfferDetails(link){
    console.log('getting data from '+link);


    let condoInfo = htmlToJson.request(link, {
        'condoInfoTitle': ['.offer-titlebox  h1', function($title) {
            return $title.text().trim();
        }],

        'condoInfoPrice': ['.price-label strong.xxxx-large.not-arranged', function ($price) {

            return $price.text().trim();
        }],

        'condoInfoLocation': ['a.show-map-link strong', function($location) {
            return $location.text().trim();
        }],

        'condoInfoSurface': ['table.details.fixed.full  tr:nth-child(4) > td:first-of-type  tr:first-of-type  td.value:nth-of-type(1) strong', function ($surface) {

            return $surface.text().trim();
        }],

        // 'condoInfoLocation': ['a.show-map-link strong', function($location) {
        //     console.log('REQUEST');
        //     return $location.text();
        // }],




        // condos: htmlToJson.createMethod(['.offer-titlebox', {
        //     'title': function ($title) {
        //         console.log('CREATEMETHOD')
        //         return $title.find('h1').text();
        //     },
        //     'location': function ($location) {
        //         return $location.find('a.show-map-link strong').text();
        //     }
        // }]),


    }, function (err, result) {
        console.log(result);
    });

}



//      "id": 3,
//     "date": "2017-11-11",
//     "title": "Sprzedam mieszkanie dwupokojowe: Katowice Józefowiec, ulica -, 70 m2, 363376 PLN, 2 pokoje",
//     "location": "Katowice",
//     "surface": 70.00,
//     "price": 363376,
//     "price/m2": 7739,
//     "rooms": 3,
//     "link": "https://www.otodom.pl",
//     "tel": "509 758 003",
//     "category": "na sprzedaż"

    // "city": ?????????

    // "id": ,
    // "date": "",
    // "title": "",
    // "location": "",
    // "category": ""
    // "price": ,
    // "price/m2": ------ ,


    // "rooms": ,
    // "link": "",
    // "tel": "",
    // "surface": ,

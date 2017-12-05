const request = require('request');
const htmlToJson = require('html-to-json');

// function Olx() {
    let promise = htmlToJson.request('https://www.olx.pl/nieruchomosci/mieszkania/sprzedaz/', {
        'condosLinks': ['a.marginright5.link.detailsLink', function ($a) {
            // console.log($a.attr('href'));
            return $a.attr('href');
        }],

    }, function (err, result) {
        // console.log(result);
        result.condosLinks.map(link => getOfferDetails(link));
    });


    function getOfferDetails(link) {
        console.log('getting data from ' + link);


        let condoInfo = htmlToJson.request(link, {
            'condoInfoTitle': ['.offer-titlebox  h1', function ($title) {

                return $title.text().trim();

            }],

            'condoInfoPrice': ['.price-label strong.xxxx-large.not-arranged', function ($price) {

                return $price.text().trim();
            }],

            'condoInfoLocation': ['a.show-map-link strong', function ($location) {
                return $location.text().trim();
            }],

            'condoInfoSurface': ['table.details.fixed.full  tr:nth-child(4) > td:first-of-type  tr:first-of-type  td.value:nth-of-type(1) strong', function ($surface) {

                return $surface.text().trim();
            }],

            'condoInfoRooms': ['table.details.fixed.full  tr:nth-child(4) > td:nth-of-type(2)  tr:first-of-type  td.value:nth-of-type(1) strong', function ($rooms) {

                return $rooms.text().trim();
            }],

            'condoInfoTel': ['.contact-button.link-phone.atClickTracking.js-show-phone-number.activated strong.xx-large', function ($tel) {

                return $tel.text().trim();
            }],


        }, function (err, result) {
            // console.log(result);
            if (result.condoInfoTitle.length > 0) {


                let newCondo = {


                    title: result.condoInfoTitle[0],
                    location: result.condoInfoLocation[0],
                    surface: result.condoInfoSurface[0],
                    price: result.condoInfoPrice[0],

                    rooms: result.condoInfoRooms[0],
                    // "link": "https://www.otodom.pl",??????????
                    tel: result.condoInfoTel[0]
                    // "category": "na sprzedaż"
                }
                // console.log(newCondo);
                request.post('http://localhost:3000/condos', {
                    form: newCondo
                }, (err, response, body) => {

                });

            }


        });
    }
// }


// module.exports = Olx;
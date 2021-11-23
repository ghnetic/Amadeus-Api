var mongoose = require("mongoose");
var SearchOffer = mongoose.model("SearchOffer");

//Amadeus Developer token
var Amadeus = require('amadeus');
const searchOffers = require("../models/search-offers");
var amadeus = new Amadeus({
    clientId: 'Ji26andXRj60pWYmqI8YCFm9Ko0JRaZ0',
    clientSecret: 'FsjDqAYsAKfajF7n'
});



amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'NYC',
    destinationLocationCode: 'LON',
    departureDate: '2021-12-20',
    adults: '2',
    max:'10'
}).then(function(response){
    for(let i=0; i<response.data.length;i++){
    let info= new searchOffers();
    info.type= response.data[i].type,
    info.id= response.data[i].id,
    info.source= response.data[i].source,
    info.oneWay= response.data[i].oneWay,
    info.lastTicketingDate= response.data[i].lastTicketingDate,
    info.numberOfBookableSeats= response.data[i].numberOfBookableSeats,
    info.price= response.data[i].price

    //info.save();
    console.log("Hizo el save");
}

    //console.log("Si hizo el save");


    //info.save();
  //console.log(response.result); //Imprime todo el get
  //console.log(response.data); //Imprime solo la data
  //console.log(response.body); //Imprime todo en json
  //console.log("Solo imprimiendo el tipo: ", response.data[0]);
}).catch(function(responseError){
    console.log("No funciono wey")
  console.log(responseError);
});


//Otro Get
amadeus.travel.analytics.airTraffic.traveled.get({
    originCityCode : 'HND',
    period : '2010-08'
  }).then(function (response){
      console.log("Respuesta del otro GET");
      console.log(response.body);
  }).catch(function(responseError){
    console.log("No funciono wey");
  console.log(responseError);
});



/*
module.exports.searchOffer = (req, res) => {
    console.log(req.body);
    let data = new SearchOffer();
    data.departure = req.body.departure;
    data.arrival = req.body.arrival;
    data.locationDeparture = req.body.locationDeparture;
    data.locationArrival = req.body.locationArrival;

    data.save((err, data) => {
        if (err) res.status(500).send({ message: 'Error al guardar los datos' })

        res.status(200).send({ data: data })
    }
    );
};

module.exports.citySearch = async (req, res) => {

    console.log(req.query);
    var keywords = req.query.keyword;
    const response = await amadeus.referenceData.locations
        .get({
            keyword: keywords,
            subType: "CITY,AIRPORT",
        })
        .catch((x) => console.log(x));
    try {
        await res.json(JSON.parse(response.body));
    } catch (err) {
        await res.json(err);
    }

};


module.exports.flightOffer = async (req, res) => {
    console.log(req.query);
    var originLocationCodes = req.query.originLocationCode;
    var destinationLocationCodes = req.query.destinationLocationCode;
    var departureDates = req.query.departureDate;
    var adult = req.query.adults;
    var maxs = req.query.max;
    const response = await amadeus.shopping.flightOfferSearch
        .get({
            originLocationCode: originLocationCodes,
            destinationLocationCode: destinationLocationCodes,
            departureDate: departureDates,
            adults: adult,
            max: maxs
        }).catch((x) => console.log());
    try {
        await res.json(JSON.parse(response.body));
    } catch (err) {
        await res.json(err);
    }
};
*/


var mongoose = require("mongoose");
var SearchOffer = mongoose.model("SearchOffer");

//Amadeus Developer token
var Amadeus = require('amadeus');
var amadeus = new Amadeus({
    clientId: 'Ji26andXRj60pWYmqI8YCFm9Ko0JRaZ0',
    clientSecret: 'FsjDqAYsAKfajF7n'
});

//Imports de los Schemas
const searchOffers = require("../models/search-offers");
const mostTraveledFlights = require("../models/most-traveled-flights");
const mostBookableFlights = require("../models/most-bookable-flights");




//Metodo get para obtener los datos del get

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
    //console.log("Hizo el save");
}

}).catch(function(responseError){
    console.log("No funciono wey")
  console.log(responseError);
});

amadeus.travel.analytics.airTraffic.traveled.get({
    originCityCode : 'NYC',
    period : '2017-08'
  }).then(function (response){
    for(let i=0; i<response.data.length;i++){
        let info= new mostTraveledFlights();
        info.type= response.data[i].type,
        info.destination= response.data[i].destination,
        info.subType= response.data[i].subType,
        info.analytics=response.data[i].analytics
        //info.save();
        //console.log("Save n.",i,"de Most Traveled Flights");
    }
  }).catch(function(responseError){
    console.log("No funciono wey");
  console.log(responseError);
});



amadeus.travel.analytics.airTraffic.booked.get({
    originCityCode : 'MAD',
    period : '2017-08'
  }).then(function (response){
    for(let i=0; i<response.data.length;i++){
        let info= new mostBookableFlights();
        info.type= response.data[i].type,
        info.destination= response.data[i].destination,
        info.subType= response.data[i].subType,
        info.analytics=response.data[i].analytics
        info.save();
        console.log("Save n.",i,"de Most BOOKED Flights");
    }
  }).catch(function(responseError){
    console.log("No funciono wey");
  console.log(responseError);
});

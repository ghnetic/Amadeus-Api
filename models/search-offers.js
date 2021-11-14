let mongoose= require("mongoose");

var searchOfferSchema = new mongoose.Schema({
    
    departure: {
        type: String
    },

    arrival: {
        type: String
    },

    locationDeparture: {
        type: String
    },

    locationArrival: {
        type: String
    }
    
});


module.exports = mongoose.model("SearchOffer", searchOfferSchema);
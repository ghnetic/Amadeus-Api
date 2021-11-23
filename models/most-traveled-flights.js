let mongoose= require("mongoose");

var mostTraveledFlightSchema = new mongoose.Schema({
    
    type:String,
    destination: String,
    subType: String,
    analytics: mongoose.Schema.Types.Mixed
    }
    
);


module.exports = mongoose.model("MostTraveledFlights", mostTraveledFlightSchema);
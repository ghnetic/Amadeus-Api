let mongoose= require("mongoose");

var mostBookableFlightSchema = new mongoose.Schema({
    
    type:String,
    destination: String,
    subType: String,
    analytics: mongoose.Schema.Types.Mixed
    }
    
);


module.exports = mongoose.model("MostBookableFlights", mostBookableFlightSchema);
let mongoose= require("mongoose");

var searchOfferSchema = new mongoose.Schema({
    
    type:String,
    id: String,
    source: String,
    oneWay: Boolean,
    lastTicketingDate: String,
    numberOfBookableSeats: Number,
    price: mongoose.Schema.Types.Mixed
    }
    
);


module.exports = mongoose.model("SearchOffer", searchOfferSchema);
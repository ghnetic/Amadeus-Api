let mongoose= require("mongoose");

var hotelRatingSchema = new mongoose.Schema({
    
    hotelId: {
        type: String
    },

    overallRating: {
        type: Number
    },

    numberOfReviews: {
        type: Number
    },

    numberOfRatings: {
        type: Number
    },

    type:{
        type:String
    }
    
});


module.exports = mongoose.model("HotelRating", hotelRatingSchema);
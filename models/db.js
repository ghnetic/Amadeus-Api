const mongoose = require("mongoose");

const mongoAtlasUri = `mongodb+srv://sofiaVidea:mongodb-amadeusApi-sofia@amadeusapi.yrdec.mongodb.net/amadeusApiAir?retryWrites=true&w=majority`;

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );
} catch (e) {
    console.log("could not connect");
}

module.exports = mongoose;

//////
require("./search-offers");
require("./most-bookable-flights");
require("./most-traveled-flights");
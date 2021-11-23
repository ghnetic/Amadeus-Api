const express = require("express");
const router = express.Router();

const ctrlSearchOffer = require("../controllers/search-offers");
const ctrlHotelRating = require("../controllers/hotelRating");

//Requests

//Avion
//router.post("/date", ctrlSearchOffer.searchOffer);
//router.get("/citysearch", ctrlSearchOffer.citySearch);
//router.post("/search-flight-offer", ctrlSearchOffer.searchOffer);

//Hotel
router.get("/hotel-rating", ctrlHotelRating.hotelRating);

module.exports = router;

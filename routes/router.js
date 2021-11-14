const express = require("express");
const router = express.Router();

const ctrlSearchOffer = require("../controllers/search-offers");
const ctrlHotelRating = require("../controllers/hotelRating");

//Requests

//Avion
router.post("/date", ctrlSearchOffer.searchOffer);
router.get("/citysearch", ctrlSearchOffer.citySearch);
router.get("/search-flight-offer", ctrlSearchOffer.flightOffer);

//Hotel
router.get("/hotel-rating", ctrlHotelRating.hotelRating);

module.exports = router;

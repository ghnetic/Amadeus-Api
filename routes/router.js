const express = require("express");
const router = express.Router();

const ctrlSearchOffer = require("../controllers/search-offers");

//Requests
router.post("/date", ctrlSearchOffer.searchOffer);
router.get("/citysearch", ctrlSearchOffer.citySearch);
router.get("/hotel-rating", ctrlSearchOffer.hotelRating);
router.get("/search-flight-offer", ctrlSearchOffer.flightOffer);

module.exports = router;

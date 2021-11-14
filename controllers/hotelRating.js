var mongoose= require("mongoose");
var HotelRating = mongoose.model("HotelRating");

//Amadeus Developer
var Amadeus = require("amadeus");
var amadeus = new Amadeus({
    clientId: 'BJTLKGIHedQ6YSVDVEGMKUhqp5FKV0R5',
    clientSecret: 'aaCvxicJL6Mr0nkg'
});

module.exports.hotelRating= async (req, res)=>{
    
    console.log(req.query);
    var hotelId = req.query.hotelIds;
    const response= await amadeus.eReputation.hotelSentiments
      .get({
          hotelIds: hotelId
      })
      .catch((x) => console.log(x)); 
    try { 
      await res.json(JSON.parse(response.body));
      console.log("Imprimiendo el id");
      console.log(JSON.parse(response.body)); 
    } catch (err) { 
      await res.json(err); 
    } 
};


module.exports.saveHotelRating= async(req, res)=>{
    let data= new HotelRating();
    data.departure= req.body.departure;
    data.arrival=req.body.arrival;
    data.locationDeparture= req.body.locationDeparture;
    const response= await amadeus.shopping.flightOfferSearch
        .get({
            originLocationCode: locationDeparture,
            destinationLocationCode: locationArrival,
            departureDate: departure,
            adults: '2'
        })
        .catch((err)=> console.log(err));
        try{
            await res.json(JSON.parse(response.body));
        }catch(err){
            await res.json(err);
        }

        data.save((err, doc) => {
            let r = {
                _err: false,
                message: undefined,
                items: undefined,
            };
    
            if (!err) {
                console.log(doc);
                res.send(doc);
            } else {
                if (err.code == 11000) {
                    console.log(err);
                    r._err = true;
                    r.message = "Elementos duplicados";
                    r.items = err.keyValue;
                    res.send(err);
                }
            }
        });

};
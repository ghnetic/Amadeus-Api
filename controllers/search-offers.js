var mongoose= require("mongoose");
var SearchOffer = mongoose.model("SearchOffer");

//Amadeus Developer
var Amadeus = require("amadeus");
var amadeus = new Amadeus({
    clientId: 'BJTLKGIHedQ6YSVDVEGMKUhqp5FKV0R5',
    clientSecret: 'aaCvxicJL6Mr0nkg'
});



module.exports.searchOffer= async(req, res)=>{
    let data= new SearchOffer();
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

module.exports.citySearch= async (req, res)=>{
     
    console.log(req.query); 
    var keywords = req.query.keyword; 
    const response = await amadeus.referenceData.locations 
      .get({ 
        keyword: keywords, 
        subType: "CITY,AIRPORT", 
      }) 
      .catch((x) => console.log(x)); 
    try { 
      await res.json(JSON.parse(response.body)); 
    } catch (err) { 
      await res.json(err); 
    } 

};


module.exports.flightOffer=async(req,res)=>{
    console.log(req.query);
    var originLocationCodes = req.query.originLocationCode;
    var destinationLocationCodes = req.query.destinationLocationCode;
    var departureDates = req.query.departureDate;
    var adult = req.query.adults;
    var maxs = req.query.max;
    const response = await amadeus.shopping.flightOfferSearch
        .get({
            originLocationCode: originLocationCodes,
            destinationLocationCode: destinationLocationCodes,
            departureDate: departureDates,
            adults: adult,
            max:maxs
        }).catch((x)=> console.log());
        try{
            await res.json(JSON.parse(response.body));
        }catch(err){
            await res.json(err);
        }
};

/*
amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2021-11-20',
    adults: '2',
    max:'2'
}).then(function(response){
    console.log("Si funciono wey");
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});
*/

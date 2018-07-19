const request=require('request');

var geocodeAddress=(address,callback) => {

    var encodedAddress=encodeURIComponent(address);

    request({ 
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
     }, (error,response,body) =>{
    
        if(error)
        {
            callback('Unable to connect to server');
        }
        else if(body.status==='ZERO_RESULTS'){
            callback('Unable to find that address.');
        }
        else if(body.status==='OK'){
            callback(undefined,{
                address:body.results[0].formatted_address
            })
            console.log('You got it mannn');
        }
    
    } );

};

module.exports.geocodeAddress=geocodeAddress;

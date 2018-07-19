const request=require('request');

var getWeather=(lat , lng , callback) => {

    request({
        url:`https://api.darksky.net/forecast/7b4a9f0d233b0f07746db717e308ea56/${lat},${lng}`,
        json:true
    },(error,response,body)=>{
    
    if(error){
        callback('Unable to connect to forecast.io server');
    
    }
    else if(response.statusCode === 400){
        callback('Unable to fetch weather.');
    }
    else if(response.statusCode === 200){

        callback(undefined,{
            temperature:body.currently.temperature,
            apparentTemperature:body.currently.apparentTemperature
        });

        console.log(body.currently.temperature);
    }
    
    });

};

module.exports.getWeather=getWeather;

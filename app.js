const request=require('request');
const yargs=require('yargs');
const geocode=require('./geocode.js')

const weather=('./weather.js')

const argv=yargs
   .options({
       a:{
           demand:true,
           alias:'address',
           describe:'Address to fetch weather for',
           string:true
       }
   })
   .help()
   .alias('help','h')
   .argv;

   geocode.geocodeAddress(argv.address, (errorMessage,results) => {
       if(errorMessage){
           console.log(errorMessage);
       }
       else{
           console.log(results.address);
 
           weather.getWeather(results.latitude,results.longitude, (errorMessage , weatherResults) =>{
            if(errorMessage)
            {
                console.log(errorMessage);
            }else{
                console.log(`It is currently ${weatherResults.temperature}.it feels like ${weatherResults.apparentTemperature}`);
            }
            
            
            } );


       }
   });

//lat , lng , callback



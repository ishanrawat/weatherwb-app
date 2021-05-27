const request =require('request')
const geo=require('./geocode')
// const url='http://api.weatherstack.com/current?access_key=fbf88099a533f93e159001193a77e9e1&query=37.8262,-122.4233&units=s'
// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log('cannot connect to weather app')

//     }
//     else if(response.body.error){
//     console.log('unable to find the coordinates')
//     }
//     else{
//     console.log('The temperature here is '+response.body.current.temperature+' and it feels like '+response.body.current.feelslike)
//     }
// })
// const geolocation=(address,callback)=>{
//   //  https://api.mapbox.com/geocoding/v5/mapbox.places/LosAngeles//
// const url1="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address+".json?access_token=pk.eyJ1IjoiaXNoYW5yYXdhdDU5IiwiYSI6ImNrcDE4NzJjdDFodm0ycG1wNjlrMzV4dmMifQ.ohZYjUNU-dsdVbV-kAzLhQ&limit=1"
// request({url:url1,json:true},(error,response)=>{
//     if(error){
//         callback('error',undefined)
//     }
//     else if(response.body.features.length===0){
//         callback('error in location',undefined)
//     }
//     else{
// callback(undefined,{
//     latitude:response.body.features[0].center[0],
//     longitude:response.body.features[0].center[1]

// })
//     }
    
// })
// }
// geolocation('losAngeles',(error,{latitude,longitude})=>{
// console.log(error)
// console.log('latitude is '+latitude+' longitude is '+longitude)
// })


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fbf88099a533f93e159001193a77e9e1&query=' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + ' % chance of rain.')
        }
    })
}

module.exports = forecast


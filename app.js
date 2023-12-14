const express = require("express") ;
const https = require("https") ;
const bodyParser =require("body-parser") ;
const app = express() ;
app.use(bodyParser.urlencoded({extended : true })) ;
app.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html") ;
}) ;
app.post("/",function(req,res){
   console.log(req.body.cityName) ;
}) ;
console.log("abcdf") ;
// const query = req.body.cityName ;
// const apikey = "af7e304e68441a9413c59d71b7f43f56" ;
// const unit = "metric" ;
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" +unit+ "" ;
// https.get(url,function(response){
//    console.log(response.statusCode) ;
//    response.on("data",function(data){
//     const weatherData = JSON.parse(data);
//     const temp = weatherData.main.temp
//     const WeatherDescription =  weatherData.weather[0].description 
//     const icon = weatherData.weather[0].icon 
//     const ImageUrl = "http://openweathermap.org/img/wn/" + icon  + "@2x.png" 
//     res.write("The temperature in your town is" + temp +"degree celcius ")
//     res.write("<img src="+ImageUrl+">") 
//     res.send() ;
//    })
// })
app.listen(3000,function(){
    console.log("server is running and the port is 3000") ;
})
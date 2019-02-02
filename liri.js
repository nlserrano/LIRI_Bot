require("dotenv").config();
var moment = require("moment");
var request = require("request");
var moment = require("moment");


// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

var userInput = process.argv[3];

if (process.argv[2] === "concert-this") {
    var artist = process.argv.slice(3).join(" ")
    console.log(artist);
   
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryURL, function (error, response, body) {
        if (error) console.log(error);
        var result  =  JSON.parse(body)[0];
        console.log("Venue name " + result.venue.name);
        console.log("Venue location " + result.venue.city);
        console.log("Date of Event " +  moment(result.datetime).format("MM/DD/YYYY"));
       


    });
      
    // search bands in town api
    // https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
}
else if (process.argv[2] === "spotify-this-song") {
    // 
}
else if (process.argv[2] === "movie-this") {
    // 
}
else if (process.argv[2] === "do-what-it-says") {
    // 
}
else {
    console.log("Incorrect command. Please try again.")
}
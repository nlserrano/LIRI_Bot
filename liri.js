require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

if (process.argv[2] === "concert-this") {
    // search bands in town api
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
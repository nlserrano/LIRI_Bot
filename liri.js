require("dotenv").config();
var moment = require("moment");
var request = require("request");
var fs = require("fs");


// var keys = require("./keys.js");
// var Spotify = new Spotify(keys.spotify);

// var spotify = new spotify({
//     id: MSMediaKeySession.spotify.id,
//     secret: MSMediaKeySession.spotify.secret
// });


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
        console.log(result);
       


    });
      
    // search bands in town api
    // https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp
}
else if (process.argv[2] === "spotify-this-song") {
    var songName = process.argv.slice(3).join(" ");
    if (songName == undefined) {
        songName = "Song is not defined";
    }
    spotify.search({ type: 'track', query: songName, limit: 10 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var tableArray = [];
        for (var i = 0; i < data.tracks.items.length; i++) {
            var result = {
                artist: data.tracks.items[i].album.artists[0].name,
                song_name: data.tracks.items[i].name,
                album_name: data.tracks.items[i].album.name,
                preview_url: data.tracks.items[i].preview_url

                
            }
            tableArray.push(result);
        }
        var table = cTable.getTable(tableArray);
        console.log(table);


    });
}
else if (process.argv[2] === "movie-this") {
    var movieName = process.argv.slice(3).join(" ");

    if (movieName == undefined) {
        movieName = "Movie is undefined err";
    }

    request('http://www.omdbapi.com/?i=tt3896198&apikey=55e8eecb&t=' + process.argv[3], function (error, response, body) {

        var result = JSON.parse(body);
        console.log("Title :" + result.Title);
        console.log("Year :" + result.Released);
        console.log("IMDB Rating :" + result.imdbRating);
        console.log("Rotten Tomatoes :" + result.Ratings[1].Value);
        console.log("Country :" + result.Country);
        console.log("Language :" + result.Language);
        console.log("Movie Plot :" + result.Plot);
        console.log("Actors :" + result.Actors);

    });
}
else if (process.argv[2] === "do-what-it-says") {
    fs.readFile('random.txt',"utf8", (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    });
}
else {
    console.log("Incorrect command. Please try again.")
}
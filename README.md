# LIRI_Bot

This is LIRI (Language Interpretation and Recongnition Interface), a command line node app that will take in parameters and return back data.

It uses the Request node package module in order to make http calls, which allows LIRI to access data from several APIs. LIRI can then search Spotify for songs, Bands in Town for concerts, and OMDB for movies. Information entered from the user are extracted through the process.argv node property.

Other modules used: fs (reading .text file), console.table (for displaying data in command line), moment (for parsing, validating, manipulating, and formatting dates, node spotify API (API library for the Spotify REST API), dotenv (for environment variables).

### How to use LIRI
#### LIRI takes 4 main commands through the command line:

1) For concert venue information, run `node liri.js concert-this <name of artist>`
![](/images/concert-this.png)

2) For song information, run `node liri.js spotify-this-song <name of song>`
![](/images/spotify-this.png)

3) For movie information, run `node liri.js movie-this-titanic <name of movie>`
![](/images/movie-this.png)

4) To read data text from random.txt file, run `node liri.js do-what-it-says`
![](/images/do-what.png)

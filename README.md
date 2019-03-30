# LIRI_Bot

This is LIRI (Language Interpretation and Recongnition Interface), a command line node app that will take in parameters and return back data.

It uses the Request node package module in order to make http calls, which allows LIRI to access data from several APIs. LIRI can then search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### How to use LIRI
#### LIRI takes 4 main commands through the command line:

1) For concert venue information, run `node liri.js concert-this <name of artist>`
![command 1](/images/concert-this)
Format: ![Alt Text](url)

2) For song information, run `node liri.js spotify-this-song <name of song>`
![Image of command 2](https://nlserrano.github.com/images/spotify-this)

3) For movie information, run `node liri.js movie-this-titanic <name of movie>`
![Image of command 3](https://nlserrano.github.com/images/movie-this)

4) To read data text from random.txt file, run `node liri.js do-what-it-says`
![Image of command 4](https://nlserrano.github.com/images/do-what)

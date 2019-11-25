//globals
var axios = require("axios")
var env = require("dotenv").config()
var keys = require("./keys.js")
//var spotify = new Spotify(keys.spotify)
var LIRI = new LIRI(keys.LIRI)
var command = process.argv[2]
var searchTerm = process.argv.slice(3).join(" ")

//default for command
if(!command){
    command = "concertThis"
}

//default for search
if(!searchTerm){
    searchTerm = "Drake"
}


//switch statement for the different commands
switch(command){
    case "concertThis":
        LIRI.concertThis(searchTerm)
        break;
    
    case "spotifyThisSong":
        LIRI.spotifyThisSong(searchTerm)
        break;

    case "movieThis":
        LIRI.movieThis(searchTerm)
        break;
    
    case "doWhatItSays":
        LIRI.doWhatItSays(searchTerm)
        break;
}
//LOOK AT ACTIVITY 13 AND 14 FOR WEEK 11
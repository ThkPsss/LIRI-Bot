var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var LIRI = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.concertThis = function(name) {
    var URL = "https://rest.bandsintown.com/artists/" + name +"/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Name of the venue: " + jsonData.VenueData.name,
        "Venue location: " + jsonData.VenueData.city,
        "Date of the Event: " + jsonData.
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  // findActor takes in the name of an actor to search for
  this.spotifyThisSong = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    axios.get(URL).then(function(response) {
      // Grab the first index of the response array, access the object at the `person` key and store it in a variable.
      var jsonData = response.data[0].person;
      // actorData ends up being the string containing the show data we will print to the console
      var actorData = [
        "Name: " + jsonData.name,
        "Birthday: " + jsonData.birthday,
        "Gender: " + jsonData.gender,
        "Country: " + jsonData.country.name,
        "URL: " + jsonData.url
      ].join("\n\n");

      // Append actorData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", actorData + divider, function(err) {
        if (err) throw err;
        console.log(actorData);
      });
    });
  };
};

console.log('this is loaded');
module.exports = LIRI;
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
}




const Traveller = function(journeys) {
  this.journeys = journeys;
};


// MVP..

// Traveller..

// should have a collection of journeys..

// should be able to get the journeys start locations..

// should be able to get the journeys end locations..

// should be able to get journeys by transport..

// should be able to get journeys over a certain distance..


Traveller.prototype.getJourneyStartLocations = function() {

};

Traveller.prototype.getJourneyEndLocations = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};


// Extensions..

// Traveller..

// should be able to calculate total distance travelled..

// should be able to get a unique list of modes of transport..


Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

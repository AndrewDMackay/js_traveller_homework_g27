
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
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};


// Extensions..

// Traveller..

// should be able to calculate total distance travelled..

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
};


// should be able to get a unique list of modes of transport..

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  })
  .filter((transport, index, array) => {
    return array.indexOf(transport) === index;
  });
};


module.exports = Traveller;

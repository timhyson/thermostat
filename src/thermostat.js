function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
};

Thermostat.prototype.temperatureRaise = function() {
  this.temperature++;
};

Thermostat.prototype.temperatureLower = function() {
  if (this.temperature === this.minTemp) {
    throw new Error("At minimum temperature");
  };
  this.temperature--;
};

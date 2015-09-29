function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
};

Thermostat.prototype.temperatureRaise = function() {
  this.temperature++;
};

Thermostat.prototype.temperatureLower = function() {
  this.temperature--;
};

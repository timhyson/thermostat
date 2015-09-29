function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.temperatureRaise = function() {
  this.temperature++;
};

Thermostat.prototype.temperatureLower = function() {
  this.temperature--;
};

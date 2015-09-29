function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.isPowerSavingOn = true;
};

Thermostat.prototype.temperatureRaise = function() {
  if (this.temperature === this.maxTemp) {
    throw new Error("At maximum temperature");
  };
  this.temperature++;
};

Thermostat.prototype.temperatureLower = function() {
  if (this.temperature === this.minTemp) {
    throw new Error("At minimum temperature");
  };
  this.temperature--;
};

Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSavingOn = !this.isPowerSavingOn;
  this.maxTemp = this.isPowerSavingOn ? 25 : 32;
};

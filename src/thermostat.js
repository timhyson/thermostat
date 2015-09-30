function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.isPowerSavingOn = true;
  this.colour = 'yellow';
};

Thermostat.prototype.temperatureRaise = function() {
  if (this.temperature === this.maxTemp) {
    throw new Error('At maximum temperature');
  };

  this.temperature++;
  this.changeColour();

};

Thermostat.prototype.temperatureLower = function() {
  if (this.temperature === this.minTemp) {
    throw new Error('At minimum temperature');
  };

  this.temperature--;
  this.changeColour();
};

Thermostat.prototype.togglePowerSaving = function() {
  this.isPowerSavingOn = !this.isPowerSavingOn;
  this.maxTemp = this.isPowerSavingOn ? 25 : 32;
  if (this.temperature > this.maxTemp) {this.temperature = this.maxTemp};

  // (this.temperature > this.maxTemp) ? this.temperature = this.maxTemp : this.temperature;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.changeColour = function() {
  if (this.temperature < 18) {this.colour = 'green';}
  else if (this.temperature > 25) {this.colour = 'red';}
};

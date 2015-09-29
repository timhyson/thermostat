describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('can be increased', function() {
      thermostat.temperatureRaise();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can be decreased', function() {
      thermostat.temperatureLower();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature of ten degrees', function() {
      expect(thermostat.minTemp).toEqual(10);
    });

    it('cannot be lowered below min temp', function() {
      var diff = (thermostat.temperature - thermostat.minTemp);
      for (diff; diff > 0; diff--) {
        thermostat.temperatureLower();
      };

      expect(function() {thermostat.temperatureLower();}).toThrowError('At minimum temperature');
    });

    it('has a maximum temperature of 25 degrees', function() {
      expect(thermostat.maxTemp).toEqual(25);
    });

  });

});

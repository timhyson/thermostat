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
      thermostat.temperatureRaise()
      expect(thermostat.temperature).toEqual(21);
    });

    it('can be decreased', function() {
      thermostat.temperatureLower()
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature of ten degrees', function() {
      expect(thermostat.minTemp).toEqual(10);
    });

  });

});

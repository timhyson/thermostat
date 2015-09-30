$( document ).ready(function() {
  var thermostat = new Thermostat();

  $('#show_temperature').text(thermostat.temperature);

  $('#up').click(function() {
    thermostat.temperatureRaise();
    $('#show_temperature').text(thermostat.temperature);
  });

  $('#down').click(function() {
    thermostat.temperatureLower();
    $('#show_temperature').text(thermostat.temperature);
  });

  $('#reset').click(function() {
    thermostat.reset();
    $('#show_temperature').text(thermostat.temperature);
  });

  $('#power_save').click(function() {
    thermostat.togglePowerSaving();
    $('#show_temperature').text(thermostat.temperature);
  });

});

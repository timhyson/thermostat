$(document).ready(function() {
  var thermostat = new Thermostat();

  var display = function() {
    $('#show_temperature').text(thermostat.temperature);
    $('#colour').css('color', thermostat.changeColour());
  };

  display();

  $('#up').click(function() {
    thermostat.temperatureRaise();
    display();

  });

  $('#down').click(function() {
    thermostat.temperatureLower();
    display();

  });

  $('#reset').click(function() {
    thermostat.reset();
    display();
  });

  $('#power_save').click(function() {
    thermostat.togglePowerSaving();
    display();

  });

});

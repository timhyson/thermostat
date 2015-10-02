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

  $('#js-geolocation').click(function() {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#apicity').val(),
      cache: false,
      success: function(json) {
        if (json.cod == 200) {$('#apitemp').html((json.main.temp.toFixed(0)) - 273);
      } else { console.log('test'); $('#apitemp').text('unknown city'); }
      }
    });
  });

});

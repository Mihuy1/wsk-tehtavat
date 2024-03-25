'use strict';

function calculateTemperature() {
  const celsius = prompt('Enter temperature in celsius:');

  const fahrenheit = celsius * (9 / 5) + 32;
  const kelvin = Number(celsius) + 273.15;

  document.querySelector('#fahrenheit').textContent =
    `Temperature in Fahrenheit: ${fahrenheit}`;

  document.querySelector('#kelvin').textContent =
    `Temperature in Kelvin: ${kelvin}`;
}

calculateTemperature();

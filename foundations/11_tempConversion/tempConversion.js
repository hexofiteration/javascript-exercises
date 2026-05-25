const convertToCelsius = function(x) {
  let cel = (x - 32) * (5/9);

  if(!Number.isInteger(cel)) return parseFloat(cel.toFixed(1));
  return cel;
};

const convertToFahrenheit = function(x) {
  let fah = x * (9/5) +32;

  if(!Number.isInteger(fah)) return parseFloat(fah.toFixed(1));
  return fah;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

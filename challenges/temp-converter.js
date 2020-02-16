console.log('tempConverter script has loaded');

// write this function!
function tempConverter(degrees, temperature) {
  if (temperature === "farenheit") {
    return (degrees - 32) * 5 / 9;
  
  } else if (temperature === "celcius") {
    return (degrees * 9 / 5) + 32;
} else {
  return temperature + ' is not supported';
}
}
// if the user wants to convert to farenheit
console.assert(tempConverter(53, 'farenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'farenheit') === 32, 'second');
console.assert(tempConverter(-40, 'farenheit') === -40, 'third');

// if the user wants to convert to celcius
console.assert(tempConverter(0, 'celcius') === 32, 'fourth');
console.assert(tempConverter(4, 'celcius') === 39.2, 'fifth');
console.assert(tempConverter(12.4, 'celcius') === 54.32, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Farenheit') === 'Farenheit is not supported', 'ninth');


function tempConverterHandler() {
  // prompt the user for a noun, verb and adjective
  const userDegrees = prompt('enter a temperature to convert');
  // cast userDegreesStr to a Number, and assign the value to userDecrees
  const userTempStr = prompt('would you like to convert to farenheit or celcius?');
  let userDecrees = Number (userDegrees);
  let userTemp = String (userTempStr);

  console.assert(typeof userDegrees === 'number', "don't forget to cast userDegrees to a string!");

  // perform core logic
  // write this line!
  const result = tempConverter(userDecrees, userTemp);
  // alert result for the user
  // write this line!
  alert(result);
  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTemp + '),', userTemp);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);

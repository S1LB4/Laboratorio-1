var random_name = require('node-random-name');
console.log(random_name()); // -> "Brittny Kraska"
console.log(random_name({ first: true, gender: "male" })); // -> "Jean"
console.log(random_name({ last: true })); // -> "Kinsel"
console.log(random_name({ seed: 'Based on this' })); // -> "Garrett Scheets"
console.log(random_name({ random: Math.random, female: true })); // -> "Jo"
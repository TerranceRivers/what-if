const prompt = require("prompt-sync")();

const planets = {
    1: 0.78,
    2: 0.39,
    3: 2.65,
    4: 1.17,
    5: 1.05,
    6: 1.23
  };
  
  const earthWeight = prompt("What is your weight on Earth?");
  console.log ('1	Venus')
  console.log ('2	Mars')
  console.log ('3	Jupiter')
  console.log ('4	Saturn')
  console.log ('5	Uranus')
  console.log ('6	Neptune')
  const destinationPlanet = Number(prompt("Which planet do you want to fight on? (Enter number 1-6)"));
  
  if (destinationPlanet in planets) {
    const weightOnFightPlanet = earthWeight * planets[destinationPlanet];
    console.log(`Your weight on ${destinationPlanet} would be ${weightOnFightPlanet}`);
  } else {
    console.log("Invalid planet number. Please enter a number between 1 and 6.");}
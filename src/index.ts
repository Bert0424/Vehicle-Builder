import Cli from './classes/Cli.js';
import Car from './classes/Car.js';
import Truck from './classes/Truck.js';
import Motorbike from './classes/Motorbike.js';
import Wheel from './classes/Wheel.js';

// Initialize an empty vehicles array
const vehicles: (Car | Truck | Motorbike)[] = [];

// Create a new CLI instance
const cli = new Cli(vehicles);

// Start the CLI
cli.startCli();
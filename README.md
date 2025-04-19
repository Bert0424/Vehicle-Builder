Vehicle Builder
Overview
The Vehicle Builder is a TypeScript-based command-line application designed to create and interact with different types of vehicles, including cars, trucks, and motorbikes. Users can create new vehicles by specifying details such as color, make, model, and vehicle-specific attributes, or select existing vehicles to perform actions like starting, accelerating, towing (for trucks), or performing a wheelie (for motorbikes). The application leverages object-oriented programming principles, TypeScript classes, interfaces, and the Inquirer package for a seamless user experience.
This project was developed as part of a coding bootcamp assignment to demonstrate the ability to update an existing codebase, implement new vehicle types, and work with TypeScript in a command-line environment.
Features
Vehicle Creation: Create new vehicles (cars, trucks, or motorbikes) with user-specified details:
Cars: VIN, color, make, model, year, weight, top speed, and four wheels.

Trucks: All car attributes plus towing capacity.

Motorbikes: All car attributes plus custom front and rear wheel diameters and brands (two wheels).

Vehicle Selection: Choose from existing vehicles to perform actions.

Actions: Perform various actions on selected vehicles, including:
Print vehicle details.

Start, stop, accelerate, decelerate, turn, or reverse the vehicle.

Truck-specific: Tow another vehicle (if within towing capacity).

Motorbike-specific: Perform a wheelie.

User-Friendly Interface: Utilizes the Inquirer package for interactive prompts and a menu-driven experience.

TypeScript Implementation: Uses classes, inheritance, interfaces, and type safety for robust code.

Persistent Interaction: Allows users to perform multiple actions on a vehicle and switch between vehicles until they choose to exit.

Installation
To run the Vehicle Builder locally, follow these steps:
Clone the Repository:
bash

git clone https://github.com/Bert0424/Vehicle-Builder.git

Navigate to the Project Directory:
bash

cd Vehicle-Builder/develop

Install Dependencies:
Ensure you have Node.js installed. Then, install the required dependencies using npm:
bash

npm install

This will install inquirer, typescript, and other dependencies listed in package.json.

Verify Setup:
Ensure the TypeScript compiler (tsc) is installed globally or available via npx. The project includes a tsconfig.json for TypeScript configuration.

Usage
To start the application, run the following command from the develop folder:
bash

npm start

This command compiles the TypeScript code (via npx tsc) and executes the compiled JavaScript in the dist folder.
How to Use the Application
Initial Prompt:
Choose to create a new vehicle or select an existing vehicle.

Creating a Vehicle:
Select a vehicle type (Car, Truck, or Motorbike).

Enter details such as color, make, model, year, weight, top speed, and vehicle-specific attributes (e.g., towing capacity for trucks, wheel details for motorbikes).

Selecting a Vehicle:
Choose from a list of existing vehicles by their VIN, make, and model.

Performing Actions:
Select from a menu of actions (e.g., print details, accelerate, tow, wheelie).

Truck-specific actions (towing) and motorbike-specific actions (wheelie) are only available for the respective vehicle types.

Continue performing actions or switch to another vehicle until you choose to exit.


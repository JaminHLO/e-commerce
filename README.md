# e-Commerce Backend

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description
    
This Project is an e-commerce backend that manages the categories, products, and tags of a company's inventory. It is built with javascript with a SQL backend. It uses the express, sequelize, dotenv, and mysql libraries and operates from the CLI and Insomnia. 
    
## Installation

Users will need to install the npm libraries as defined in the included package.json file. Also please create a .env file including entries for the ecommerce_db database as well as your mysql username and password.
Set-Up CLI Commands from project root directory:
>npm i <br>
>cd db<br>
>mysql -u root -p // when prompted enter your mysql password<br>
>SOURCE schema.sql<br>
>cd ..<br>
>npm run seed<br>

## Usage

A Demonstration Video showing the setup and functionality of the program is available here: <https://www.loom.com/share/a137544a78c043258a147e612f452f60> <br>
Otherwise, the program server is initialized in the project root directory with:
>npm run start<br>
Within Insomnia GET, PUT, POST, and DELETE commands may be used from: <http://localhost:3001/api/> as long as the user enters one of the follow folders: "categories", "products", or "tags". GET, PUT and DELETE commands may be used on individual records using the syntax <http://localhost:3001/api/products/1> - where products could also be tags or categories. The syntax of entries using PUT or POST commands are shown in the demonstration video above.

## License

This Project is covered by the following license: GNU General Public License v3.0.

## Contributions

Instruction was provided by Instructor Saurav with assistance from TAs Andreas #1, Andreas #2, Constan, and Morgan. 

Leaned on previous assignments and online resources. A good online resource I used was: 
<https://www.w3schools.com/>

For a good resource for javascript debugging and error messages, check out: 
<https://stackoverflow.com/>

## Tests

The Project may tested using the installation instructions above and running 'npm run start'and then using Insomnia and/or MySQL Workbench 6.0 CE to confirm and maniulate the status of the database. Please see the Demonstration Video above for a walkthrough.

## Questions

My GitHub username is JaminHLO and my repository is available here: <https://github.com/JaminHLO/>.
If you have any questions please contact me at <jamin.hogan@gmail.com>.

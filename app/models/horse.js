// Dependencies
// =============================================================

// Sequelize library
const Sequelize = require("sequelize");
// Connection to the database (connection.js)
const sequelize = require ("../config/connection.js");
// A "horse" model with the following configuration

const Horse = sequelize.define("horse",{
    // 1. Age
    age: Sequelize.INTEGER,
    // 2. Gender---But Gender is a spectrum :D
    gender: Sequelize.STRING,
    // 3. Name
    name: Sequelize.STRING,
    // 4. Sire
    sire: Sequelize.STRING,
    // 4. Mare
    mare: Sequelize.STRING
});

// Sync model with DB
Horse.sync();
// Export the horse model for other files to use
module.exports = Horse;
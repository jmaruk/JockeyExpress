// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Horse = require("../models/horse.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Sequelize code to get all horses and return them as JSON
  app.get("/api/all", function (req, res) {
    Horse.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  // Sequelize code to get a specific horse by name  and return it as JSON
  app.get("/api/horse/:horseName", function (req, res) {
    Horse.findAll({
      where: {
        name: req.params.horseName
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Sequelize code to get all horses  of a specific gender and return them as JSON
  app.get("/api/gender/:gender", function (req, res) {
    Horse.findAll({
      where: {
        gender: req.params.gender
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Add sequelize code to get all horses from a specific author and return them as JSON
  app.get("/api/sire/:sire", function (req, res) {
    Horse.findAll({
      where: {
        sire: req.params.sire
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Add sequelize code to get all "long" horses (more than 150 pages) and return them as JSON
  app.get("/api/age/young", function (req, res) {
    Horse.findAll({
      where: {
        age: {
          $lte: 5
        }
      },
      order: [["age", "DESC"]]
    }).then(function (results) {
      res.json(results);
    });
  });

  // Add sequelize code to get all "short" horses (150 pages or less) and return them as JSON
  app.get("/api/age/old", function (req, res) {
    Horse.findAll({
      where: {
        age: {
          $gte: 5
        }
      },
      order: [["age", "DESC"]]
    }).then(function (results) {
      res.json(results);
    });
  });

  // Add sequelize code to create a horse
  app.post("/api/new", function (req, res) {
    Horse.create({
      age: req.body.age,
      gender: req.body.gender,
      name: req.body.name,
      sire: req.body.sire,
      mare: req.body.mare
    })
  });

  // Add sequelize code to delete a horse
  app.post("/api/delete", function (req, res) {
    Horse.destroy({
      where: {
        id: req.body.id
      }
    });
  });
};

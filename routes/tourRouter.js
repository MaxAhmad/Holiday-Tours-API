const express = require("express");

const tourController = require("../controllers/tourControllers");

/**IMPLEMENTING TOURS ROUTE */

const tourRouter = express.Router();

// tourRouter.get('/', tourController.getAllTours)

// tourRouter.get('/:id', tourController.getTour)

// tourRouter.post('/', tourController.createTour)

// tourRouter.patch('/:id', tourController.updateTour)

// tourRouter.patch('/:id', tourController.deleteTour)

/**********OR*******/

tourRouter
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

tourRouter
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = tourRouter;

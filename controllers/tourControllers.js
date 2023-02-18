const Tour = require(`../models/tourModel`);
const APIFeatures = require(`../utils/APIFeatures`);

exports.getAllTours = async (req, res) => {
  try {
    // Execute querry
    const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const tours = await features.query;
    res.status(200).json({
      status: "success",
      result: tours.length,
      data: { tours },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    // creating a new tour (post request)
    //initially we created a tour using the save method as
    // newTour = new Tour.save(), we can equally do this using the create method which returns a promise and instead of using the then() method
    // we can use the async and await function

    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      requestTime: req.reqTime,
      data: { tour: newTour },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { tour },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "succes",
      data: { tour },
    });
  } catch {
    res.status(err)(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "succes",
      data: null,
    });
  } catch (err) {
    res.status(err)(400).json({
      status: "fail",
      message: err,
    });
  }
};

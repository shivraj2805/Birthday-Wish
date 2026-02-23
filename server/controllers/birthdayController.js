const Birthday = require('../models/Birthday');

// @desc    Get all birthday wishes
// @route   GET /api/birthdays
// @access  Public
const getBirthdays = async (req, res, next) => {
  try {
    const birthdays = await Birthday.find().sort({ birthDate: 1 });
    res.status(200).json({
      success: true,
      count: birthdays.length,
      data: birthdays,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single birthday wish
// @route   GET /api/birthdays/:id
// @access  Public
const getBirthday = async (req, res, next) => {
  try {
    const birthday = await Birthday.findById(req.params.id);
    
    if (!birthday) {
      return res.status(404).json({
        success: false,
        message: 'Birthday wish not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: birthday,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new birthday wish
// @route   POST /api/birthdays
// @access  Public
const createBirthday = async (req, res, next) => {
  try {
    const { name, birthDate, message } = req.body;
    
    const birthday = await Birthday.create({
      name,
      birthDate,
      message,
    });
    
    res.status(201).json({
      success: true,
      data: birthday,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update birthday wish
// @route   PUT /api/birthdays/:id
// @access  Public
const updateBirthday = async (req, res, next) => {
  try {
    const birthday = await Birthday.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    
    if (!birthday) {
      return res.status(404).json({
        success: false,
        message: 'Birthday wish not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: birthday,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete birthday wish
// @route   DELETE /api/birthdays/:id
// @access  Public
const deleteBirthday = async (req, res, next) => {
  try {
    const birthday = await Birthday.findByIdAndDelete(req.params.id);
    
    if (!birthday) {
      return res.status(404).json({
        success: false,
        message: 'Birthday wish not found',
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Birthday wish deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete all birthday wishes
// @route   DELETE /api/birthdays
// @access  Public
const deleteAllBirthdays = async (req, res, next) => {
  try {
    const result = await Birthday.deleteMany({});
    
    res.status(200).json({
      success: true,
      message: `All birthday wishes deleted successfully. ${result.deletedCount} records removed.`,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBirthdays,
  getBirthday,
  createBirthday,
  updateBirthday,
  deleteBirthday,
  deleteAllBirthdays,
};

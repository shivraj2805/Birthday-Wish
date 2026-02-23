const mongoose = require('mongoose');

const birthdaySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    birthDate: {
      type: Date,
      required: [true, 'Please add a birth date'],
    },
    message: {
      type: String,
      trim: true,
      default: 'Happy Birthday!',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Birthday', birthdaySchema);

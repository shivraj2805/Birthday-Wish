const express = require('express');
const router = express.Router();
const {
  getBirthdays,
  getBirthday,
  createBirthday,
  updateBirthday,
  deleteBirthday,
  deleteAllBirthdays,
} = require('../controllers/birthdayController');

router.route('/')
  .get(getBirthdays)
  .post(createBirthday)
  .delete(deleteAllBirthdays);

router.route('/:id')
  .get(getBirthday)
  .put(updateBirthday)
  .delete(deleteBirthday);

module.exports = router;

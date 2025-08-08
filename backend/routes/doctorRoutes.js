const express = require('express');
const router = express.Router();
const { getDoctors, addDoctor } = require('../controllers/doctorController.js');

router.get('/', getDoctors);
router.post('/', addDoctor);

module.exports = router;

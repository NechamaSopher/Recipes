const express = require('express');

const router = express.Router();
const EventCtrl = require('../controllers/event');

router.post('/event', EventCtrl.create);

module.exports = router;

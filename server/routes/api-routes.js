'use strict';

import express from 'express';
const router = express.Router();

router.use('/examples', require('../api/example'));

module.exports = router;

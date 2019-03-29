const express = require('express');
const chapterRoutes = require('./chapters');

const router = express.Router();

router.use('/chapter', chapterRoutes);


router.get('/',  (req, res) => {
  res.render('index');
})

module.exports = router;
const router = require('express').Router();
const { chapterList, chapterDetails, chapterDelete, chapterCreate } = require('../controllers/chapter.controller');

router.get('/', chapterList);
router.get('/:chapterId', chapterDetails)
router.post('/', chapterCreate);
router.delete('/:chapterId', chapterDelete)

module.exports = router;
const Chapter = require('../database/models/chapter.model');
const { getChapters, getChapter, deleteChapter, createChapter } = require('../queries/chapter.queries');

exports.chapterList = async (req, res) => {
  try {
    const chapters = await getChapters();
    res.render('index', { chapters });
  } catch(e) {
  }
};

exports.chapterDetails = (req, res) => {
  try {
    const chapterId = req.params.chapterId;
    const chapter = await getChapter(chapterId);
    res.render('chapter', { chapter });
  } catch(e) {
  }
}

exports.chapterDelete = (req, res) => {
  try {
    const chapterId = req.params.chapterId;
    const chapter = await deleteChapter(chapterId);
    const chapters = await getChapters();
    res.render('index', { chapters });
  } catch(e) {
  }
}

exports.chapterCreate = (req, res) => {
  try {
    const chapter = await createChapter(req.body);
    res.redirect('/');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    res.status(400).render('form', { errors });
  }
};

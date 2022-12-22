import express from 'express';
import { Initiative } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

router.post('/in', async (req, res) => {
  const {
    title, description, levelId, categoryId, term,
  } = req.body;
  await Initiative.create({
    title, description, levelId, categoryId, term, userId: req.session.user.id,
  });
  res.redirect('/');
});

export default router;

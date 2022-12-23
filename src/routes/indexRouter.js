import express from 'express';
import { Initiative } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const activity = await Initiative.findAll();
  // console.log(activity);
  const initState = { activity };
  res.render('Layout', initState);
});
// router.get('/page/:id', (req, res) => {
//   // взяли из базы данных опреденный пост
//   res.render('Layout');
// });

router.get('/initall', async (req, res) => {
  const init = await Initiative.findAll();
  console.log(init);
  res.json(init);
});

export default router;

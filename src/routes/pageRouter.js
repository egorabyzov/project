import { Router } from 'express';
import { Initiative } from '../../db/models';

const router = Router();

router.get('/:id', async (req, res) => {
  // const post = await Initiative.findOne({ where: { id: req.params.id } });
  // res.json({ post });
  const initState = {};
  res.render('Layout', initState);
});
// .get(async (req, res) => {
//   await Initiative.findOne({ where: { id: req.params.id } });
//   res.redirect('/:id'), { id };
// });


router.patch('/api/vote', async (req, res) => {
req.body = initiative.id 



})

export default router;

// взяли из базы данных опреденный пост
// const post = Initiative.findOne({ where: { id: req.params.id } });

import { Router } from 'express';
import { Initiative } from '../../db/models';

const router = Router();

router.get('/:id', async (req, res) => {
  const post = await Initiative.findOne({ where: { id: req.params.id } });
  const initState = { post };
  res.render('Layout', initState);
  // res.json(post);
});

// .get(async (req, res) => {
//   await Initiative.findOne({ where: { id: req.params.id } });
//   res.redirect('/:id'), { id };
// });

export default router;

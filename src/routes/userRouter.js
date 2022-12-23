import { Router } from 'express';
import { Initiative } from '../../db/models';

const router = Router();

router.get('/:id', async (req, res) => {
  const posts = await Initiative.findAll({ where: { userId: req.params.id } });
  const initState = { posts };
  res.render('Layout', initState);
  // res.json(post);
});
export default router;

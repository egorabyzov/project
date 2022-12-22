import { Router } from 'express';
import { Initiative } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});

router.get('/:id', async (req, res) => {
  const initiatives = await Initiative.findAll({ where: { userId: req.params.id } });
  res.redirect('Layout', { initiatives });
});

export default router;

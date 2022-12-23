import express from 'express';
import { Initiative, Category, Level } from '../../db/models';

const api = express.Router();

api.get('/initall', async (req, res) => {
  const init = await Initiative.findAll({ include: [Category, Level] });
  res.json(init);
});

// router.patch('/api/vote', async (req, res) => {
//   req.body = initiative.id;
// });

export default api;

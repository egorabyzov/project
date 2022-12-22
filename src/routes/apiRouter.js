import express from 'express';
import { Initiative, Category, Level } from '../../db/models';

const api = express.Router();

api.get('/initall', async (req, res) => {
  const init = await Initiative.findAll({ include: [Category, Level] });
  res.json(init);
});

export default api;

import express from 'express';
import { Initiative } from '../../db/models';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .post(async (req, res) => {
    await Initiative.create(req.body);
    res.redirect('/');
  });

export default router;

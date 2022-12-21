import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
  // взяли из базы данных опреденный пост
  res.render('Layout');
});

export default router;

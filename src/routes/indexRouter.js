import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { };
  res.render('Layout', initState);
});
// router.get('/page/:id', (req, res) => {
//   // взяли из базы данных опреденный пост
//   res.render('Layout');
// });

export default router;
